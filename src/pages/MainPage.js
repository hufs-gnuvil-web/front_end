import React, {useEffect, useState} from "react";
import { MainStyle } from "../styles/MainStyled";
import { Link } from "react-router-dom";

import axios from "axios";

// import socketIOClient from "socket.io-client";
// const socket = socketIOClient("https://falling-fire-8326.fly.dev");

export default function MainPage() {
    let sessionStorage = window.sessionStorage;
    const [address, setAddress] = useState("");
    const [locationalCode, setLocationalCode] = useState("");
    const [userId, setUserId] = useState(sessionStorage.id);

    const UserURL = "https://falling-fire-8326.fly.dev/user/" + userId + "/info"

    useEffect(() => {
        // 사용자 정보(주소코드, 주소)
        axios.get(UserURL)
        .then((res) => {
            setLocationalCode(res.data.locationalCode);
            setAddress(res.data.address);
            console.log(locationalCode);
            })
            .catch((error) => {
            alert(error.response.data.message)
        })

        // socket.on("mainchat joined", async (room) => {
        //     // setCurrentRoom(room);
        //     let messages;
        //     await axios
        //       .get(`${URL}/chat/mainchat/${locationalCode}`)
        //       .then((res) => (messages = res.data))
        //       .catch((err) => console.error(err));
        //     setMessages([...messages] || []);
        // });
    },[]);

    // const handleJoinRoom = (data) => {
    //     socket.emit("mainchat join room", locationalCode);
    // };

    return(
        <MainStyle>
            <div className = "mainHeader">
                <img className = "mainHeader-logo" src = "images/logo.png" alt = "logo" />
                
                <div>
                {sessionStorage.id ?
                    <Link to = "/mypage">
                        <img src = "images/profile-user.png" alt = "mypage" />
                    </Link>
                    : 
                    <Link to = "/login">
                        <button>로그인</button>
                    </Link>
                }
                </div>

            </div>
            <div className = "main-wrapper">
                <div className = 'main-left-container'>
                    <img src = "images/Title.png" alt = "id" />
                    <div className = "main-left-txt">함께 나누는 배달비</div>
                    {sessionStorage.id ?
                    <Link to = '/chat'><button>Know More</button></Link>
                    : 
                    <Link to = '/login'><button>Know More</button></Link>
                }
                </div>
                <img className = "main-right-container" src = "images/background.png" alt = "id" />
            </div>
        </MainStyle>
    )
}