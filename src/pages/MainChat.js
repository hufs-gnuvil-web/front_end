import React, {useEffect, useState} from "react";
import Header from '../components/Header'
import { MainChatStyle } from "../styles/MainChatStyled";

import socketIOClient from "socket.io-client";
import axios from "axios";

const URL = "https://falling-fire-8326.fly.dev";
const socket = socketIOClient(URL);

export default function MainChat() {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    let sessionStorage = window.sessionStorage;
    const [setuserId, userId] = useState(sessionStorage.id);

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
              senderName: sessionStorage.name,
              senderId: userId,
              message: inputMessage,
            };
            socket.emit("send message", messageData);
            setInputMessage("");
          }
        };
      
    return(
        <MainChatStyle>
            <Header />
            <div>
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
            <div className = "mainchat-address">
                <div className = "mainchat-address-main">
                    <div className = "mainchat-address-main-left">
                        <img src = "images/location.png" alt = "id" />
                        <span>이문 1동 ∨</span>
                    </div>
                    <div className = "mainchat-address-main-right">주소 관리 》</div>
                </div>

                <div className = "mainchat-address-sub">
                    <div className = "mainchat-address-sub-left">

                    </div>
                    <div className = "mainchat-address-sub-right">
                        <div>
                            그누빌 님, 이문 1동 근처 107,107명의 이웃들과<br/>
                            배달비 쉐어를 시작해보세요!
                        </div>
                        <div>
                            Write your message here.
                        </div>
                    </div>
                </div>
            </div>
            <div className = "mainchat-wrapper">
                <div className = "mainchat-chat-contents">
                    <div className = "mainchat-chat">
                        <img src = "images/person.png" alt = "user" />
                        <div className = "mainchat-chat-message">

                        </div>
                    </div>
                    <div className = "mainchat-chat">
                        <img src = "images/person.png" alt = "user" />
                        <div className = "mainchat-chat-message">

                        </div>
                    </div>                
                    <div className = "mainchat-chat">
                        <img src = "images/person.png" alt = "user" />
                        <div className = "mainchat-chat-message">

                        </div>
                    </div>
                </div>

                <div className = "mainchat-input">
                    {/* <button>+</button> */}
                    <input />
                </div>
            </div>
        </MainChatStyle>
    )
}