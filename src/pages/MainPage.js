import React, {useEffect, useState} from "react";
import { MainStyle } from "../styles/MainStyled";
import { Link } from "react-router-dom";

import socketIOClient from "socket.io-client";
import axios from "axios";

const URL = "https://falling-fire-8326.fly.dev";
const socket = socketIOClient(URL);

export default function MainPage() {
    let sessionStorage = window.sessionStorage;

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