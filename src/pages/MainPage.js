import React, {useEffect, useState} from "react";
import { MainStyle } from "../styles/MainStyled";
import { Link } from "react-router-dom";

import socketIOClient from "socket.io-client";
import axios from "axios";

const URL = "https://falling-fire-8326.fly.dev";
const socket = socketIOClient(URL);

export default function MainPage() {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [userId, setuserId] = useState("");

    useEffect(() => {
        // Fetch initial chatroom list
        socket.on("room list updated", (newRoom) => {
          setChatRooms((prevRooms) => [...prevRooms, newRoom]);
        });
    
        // Room created event
        socket.on("new room", (room) => {
          setCurrentRoom(room);
          setMessages(null);
        });
    
        // Room joined event
        socket.on("room joined", async (room) => {
          setCurrentRoom(room);
          let messages;
          await axios
            .get(`${URL}/chat/${room.locationalCode}/${room.roomId}/message`)
            .then((res) => (messages = res.data))
            .catch((err) => console.error(err));
          setMessages([...messages] || []);
        });
    
        // Room left event
        socket.on("room left", () => {
          setCurrentRoom(null);
          setMessages(null);
        });
    
        // New message event
        socket.on("new message", (message) => {
          setMessages((prevMessages) =>
            prevMessages ? [...prevMessages, message] : [message]
          );
        });
        return () => {
            // Clean up event listeners
            socket.off("room list updated");
            socket.off("new room");
            socket.off("room joined");
            socket.off("room left");
            socket.off("new message");
          };
        }, []);
      
        const handleuserId = () => {
          const userId = prompt("Enter Your Name: ");
          setuserId(userId);
        };
      
        const handleCreateRoom = () => {
          // Prompt user for room data
          const locationalCode = prompt("locationalCode");
          const roomName = prompt("roomName");
          const maxMember = prompt("maxMember");
          const hostingMember = prompt("hostingMember");
          const currentMember = [hostingMember];
          const deliveryFee = prompt("deliveryFee");
          const restaurantName = prompt("restaurantName");
          const meetingTime = prompt("meetingTime");
          const roomId = Date.now().toString();
          const roomData = {
            roomId,
            locationalCode,
            roomName,
            maxMember,
            currentMember,
            hostingMember,
            deliveryFee,
            restaurantName,
            meetingTime,
          };
      
          socket.emit("create room", roomData);
        };
      
        const handleJoinRoom = (room) => {
          socket.emit("join room", room);
        };
      
        const handleLeaveRoom = () => {
          socket.emit("leave room", { roomId: currentRoom.roomId, userId });
        };
      
        const handleSendMessage = () => {
          if (inputMessage) {
            const messageData = {
              roomId: currentRoom.roomId,
              senderName: userId,
              senderId: userId,
              message: inputMessage,
            };
            socket.emit("send message", messageData);
            setInputMessage("");
          }
        };

    return(
        <MainStyle>
                        <div>
      <div>
        {userId === "" ? (
          <button onClick={handleuserId}>Set User Id</button>
        ) : (
          <h2>Hello! {userId}</h2>
        )}
      </div>
      {/* Create Room */}
      {!currentRoom && (
        <div>
          <button onClick={handleCreateRoom}>Create Room</button>
        </div>
      )}

      {/* Room List */}
      {chatRooms.length > 0 && (
        <div>
          <h2>Chatroom List</h2>
          <ul>
            {chatRooms.map((room) => (
              <li key={room.roomId}>
                <button onClick={() => handleJoinRoom(room)}>
                  {room.roomName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Current Room */}
      {currentRoom && (
        <div>
          <h2>Current Room: {currentRoom.roomName}</h2>
          <button onClick={handleLeaveRoom}>Leave Room</button>

          {/* Chat Messages */}
          {messages !== null && (
            <div>
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>
                    <strong>{message.senderName}: </strong>
                    {message.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Chat Input */}
          <div>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
            <div className = "mainHeader">
                <img className = "mainHeader-logo" src = "images/logo.png" alt = "logo" />
                <Link to = "/login">
                    <img src = "images/profile-user.png" alt = "mypage" />
                </Link>
            </div>
            <div className = "main-wrapper">
                <div className = 'main-left-container'>
                    <img src = "images/Title.png" alt = "id" />
                    <div className = "main-left-txt">함께 나누는 배달비</div>
                    <Link to = '/chat'><button>Know More</button></Link>
                </div>
                <img className = "main-right-container" src = "images/background.png" alt = "id" />
            </div>
        </MainStyle>
    )
}