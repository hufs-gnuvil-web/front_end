import React, {useEffect, useState} from "react";
import { MainStyle } from "../styles/MainStyled";
import { Link, useNavigate } from "react-router-dom";

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
        // 사용자 정보(주소코드)
        axios.get(UserURL)
        .then((res) => {
            setLocationalCode(res.data.locationalCode);
            console.log(locationalCode);
            })
            .catch((error) => {
            alert(error.response.data.message)
        })
    },[]);

    const navigate = useNavigate();

    const clickMainChat = () => {
        navigate('/chat', {
            state: {
              id: 1,
              job: '개발자'
            }
        }
        )
    }

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
                        <button>Login</button>
                    </Link>
                }
                </div>

            </div>
            <div className = "main-wrapper">
                <div className = 'main-left-container'>
                    <img src = "images/Title.png" alt = "id" />
                    <div className = "main-left-txt">함께 나누는 배달비</div>
                    {sessionStorage.id ?
                    <button onClick={clickMainChat}>Know More</button>
                    : 
                    <Link to = '/login'><button>Know More</button></Link>
                }
                </div>
                <img className = "main-right-container" src = "images/background.png" alt = "id" />
            </div>
        </MainStyle>
    )
}