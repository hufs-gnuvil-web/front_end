import React, {useEffect, useState} from "react";
import Header from '../components/Header'
import { MainChatStyle } from "../styles/MainChatStyled";
// import PopupChat from '../components/PopupChat'
import { CreateChatStyled, PopupChatStyled } from "../styles/ComponentStyled";

import socketIOClient from "socket.io-client";
import axios from "axios";

import Modal from 'react-modal';
// import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const URL = "https://falling-fire-8326.fly.dev";
const socket = socketIOClient(URL);

export default function MainChat() {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    let sessionStorage = window.sessionStorage;
    const [userId, setUserId] = useState(sessionStorage.id);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //메인 채팅
    const [address, setAddress] = useState("");
    const [locationalCode, setLocationalCode] = useState("");
    const [mainMessage, setMainMessage] = useState([]);
    const [inputMainMessage, setInputMainMessage] = useState("");
    const UserURL = "https://falling-fire-8326.fly.dev/user/" + userId + "/info"

    // 모달 채팅
    const [roomName, setRoomName] = useState("");
    const [maxMember, setMaxMember] = useState("");
    const [deliveryFee, setDeliveryFee] = useState("");
    const [restaurantName, setRestaurantName] = useState("");
    const [meetingTime, setMeetingTime] = useState("");

    useEffect(() => {
        // 사용자 정보(주소코드, 주소)
        axios.get(UserURL)
        .then((res) => {
            setLocationalCode(res.data.locationalCode);
            setAddress(res.data.address);
            })
            .catch((error) => {
            alert(error.response.data.message)
        })

        // main chat
        socket.on("mainchat joined", async (e) => {
          let mainMessage;
          await axios
            .get(`${URL}/chat/mainchat/${locationalCode}`)
            .then((res) => (mainMessage = res.data))
            .catch((err) => console.error(err));
          setMainMessage([...mainMessage] || []);
      });

        // mainchat New message event
        socket.on("new main message", (mainMessage) => {
          setMainMessage((prevMainMessage) =>
            prevMainMessage ? [...prevMainMessage, mainMessage] : [mainMessage]
          );
        });

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
            socket.off("mainchat joined");
            socket.off("new main message");

            socket.off("room list updated");
            socket.off("new room");
            socket.off("room joined");
            socket.off("room left");
            socket.off("new message");
          };
      }, []);


    const handleJoinMainRoom = (data) => {
        socket.emit("mainchat join room", locationalCode);
    };

    const handleSendMainMessage = () => {
      if (inputMainMessage) {
        const mainMessageData = {
          locationalCode: locationalCode,
          senderName: sessionStorage.name,
          senderId: userId,
          message: inputMainMessage,
        };
        socket.emit("mainchat send message", mainMessageData);
        setInputMainMessage("");
      }
    };

        const handleCreateRoom = () => {
          // Prompt user for room data
          const hostingMember = userId;
          const currentMember = [hostingMember];
          const roomId = Date.now();
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
  // roomid(locationalcode), userID
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
            
{/* 연습 코드 */}
<div>
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
{/* Chat Messages */}
{messages !== null && (
  <div>
    <ul>
      {messages.map((message, index) => (
        <>
        {message.senderName == sessionStorage.name ?
          <li key={index}>
            {message.message}
            <strong> :{message.senderName}</strong>
          </li>
        :
          <li key={index}>
            <strong>{message.senderName}: </strong>
            {message.message}
          </li>
        }
        </>
      ))}
    </ul>
  </div>
)}
<div>
  <input
    type="text"
    value={inputMessage}
    onChange={(e) => setInputMessage(e.target.value)}
  />
  <button className = "mainchat-sendbtn" onClick={handleSendMessage}>
    <img src = "images/sendIcon.png" alt = "user" />
  </button>
</div>
  {/* Current Room */}
  {currentRoom && (
    <div>
      <h2>Current Room: {currentRoom.roomName}</h2>
      <button onClick={handleLeaveRoom}>Leave Room</button>
    </div>
  )}
</div>




            <div className = "mainchat-address">
                <div className = "mainchat-address-main">
                    <div className = "mainchat-address-main-left">
                        <img src = "images/location.png" alt = "id" />
                        <span>{address.address} ∨</span>
                    </div>
                    <div className = "mainchat-address-main-right">주소 관리 》</div>
                </div>

                <div className = "mainchat-address-sub">
                    <div className = "mainchat-address-sub-left">

                    </div>
                    <div className = "mainchat-address-sub-right">
                        <div>
                            {sessionStorage.name} 님, {address.address} 근처의 이웃들과<br/>
                            배달비 쉐어를 시작해보세요!
                        </div>
                        <div>
                            Write your message here.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleJoinMainRoom}>버튼</button>
            <div className = "mainchat-wrapper">
              {mainMessage !== null && (
                <div className = "mainchat-chat-contents">
                  {mainMessage.map((mainMessage, index) => (
                    <>
                    {mainMessage.senderName === sessionStorage.name ?
                      <div className = "mainchat-chat-mymessage" key={index}>
                        {mainMessage.message}
                      </div>
                    :
                      <div className = "mainchat-chat" key={index}>
                        <div className="pc-chat-sender">{mainMessage.senderName}</div>
                        <div className="main-chat-message">{mainMessage.message}</div>
                      </div>
                    }
                    </>
                  ))}
                </div>
              )}
                <div className = "mainchat-input">
                    <button className = "mainchat-addbtn" onClick={()=> setModalIsOpen(true)}>+</button>
                    <input
                        type="text"
                        value={inputMainMessage}
                        onChange={(e) => setInputMainMessage(e.target.value)}
                      />
                    <button className = "mainchat-sendbtn" onClick={handleSendMainMessage}>
                      <img src = "images/sendIcon.png" alt = "user" />
                    </button>
                </div>
            </div>

            <Modal isOpen={modalIsOpen}>
              {!currentRoom ? 
                <CreateChatStyled>
                  <div className="cc-header">
                    <button onClick={()=> setModalIsOpen(false)}>Ⅹ</button>
                  </div>

                  <div className="cc-inputwrapper">
                    <input 
                      className = "cc-input-roomname"
                      type="text"
                      value = {roomName}
                      onChange = {(e) => {setRoomName(e.target.value)}}
                      placeholder="채팅방 이름 설정"
                    />

                    {/* <div className="cc-input">
                      <img src = "images/meet.png" alt = "meet" />
                      <input 
                        type="number"
                        value = {locationalCode}
                        onChange = {(e) => {setLocationalCode(e.target.value)}}
                        placeholder="locationalCode"
                      />
                    </div> */}
                    
                    <div className="cc-input">
                      <img src = "images/minnum.png" alt = "id" />
                      <input 
                        type="number"
                        value = {maxMember}
                        onChange = {(e) => {setMaxMember(e.target.value)}}
                        placeholder="최소 인원 설정"
                      />
                    </div>
                    <div className="cc-input">
                      <img src = "images/money.png" alt = "meet" />
                      <input 
                        type="number"
                        value = {deliveryFee}
                        onChange = {(e) => {setDeliveryFee(e.target.value)}}
                        placeholder="기존 배달비"
                      />         
                    </div>
                    <div className="cc-input">
                      <img src = "images/deliverylocation.png" alt = "meet" />
                      <input 
                        type="text"
                        value = {restaurantName}
                        onChange = {(e) => {setRestaurantName(e.target.value)}}
                        placeholder="배달 지점 선택"
                      />
                    </div>
                    <div className="cc-input">
                      <img src = "images/time.png" alt = "meet" />
                      <input 
                        type="number"
                        value = {meetingTime}
                        onChange = {(e) => {setMeetingTime(e.target.value)}}
                        placeholder="만나는 시간"
                      />
                    </div>

                    <button className="cc-savebtn"onClick={handleCreateRoom}>저장</button>
                  </div>
                </CreateChatStyled>
                :
                <PopupChatStyled>
                  <div className="pc-header">
                  </div>
                  <div className="pc-roomname">
                    {currentRoom.roomName}
                  </div>
                  <div className = "pc-wrapper">
                    {/* Chat Messages */}
                    {messages !== null && (
                      <div className = "pc-chat-contents">
                        {messages.map((message, index) => (
                          <>
                          {message.senderName === sessionStorage.name ?
                            <div className="pc-mychat" key={index}>
                              {message.message}
                            </div>
                          :
                            <div className="pc-chat" key={index}>
                              <div className="pc-chat-sender">{message.senderName}</div>
                              <div className="pc-chat-message">{message.message}</div>
                            </div>
                          }
                          </>
                        ))}
                      </div>
                    )}
                    <div className = "mainchat-input">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                      />
                      <button className = "mainchat-sendbtn" onClick={handleSendMessage}>
                        <img src = "images/sendIcon.png" alt = "user" />
                      </button>
                    </div>
                  </div>
              </PopupChatStyled>
              }
        </Modal>
        </MainChatStyle>
    )
}