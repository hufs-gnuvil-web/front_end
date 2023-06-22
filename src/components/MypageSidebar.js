import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {MyPageSidebarStyled} from '../styles/ComponentStyled'
import {BiLock} from 'react-icons/bi';
import {BsChatLeftHeart} from 'react-icons/bs';
import {MdOutlineScreenShare} from 'react-icons/md';
import {MdOutlineSentimentSatisfied} from 'react-icons/md';
import axios from "axios";

export default function MypageSidebar() {
    const [name, setName] = useState("");

    const [activeMenu, setActiveMenu] = useState("privacy");
    const navigate = useNavigate();

    useEffect(() => {
        // 사용자 정보(주소코드)
        axios.get(`https://falling-fire-8326.fly.dev/user/${sessionStorage.id}/info`)
        .then((res) => {
            setName(res.data.name);
            })
        .catch((error) => {
            alert(error.response.data.message);
        })
    },[name]);

    const handleMypageBtn = (e) => {
        setActiveMenu(e.currentTarget.id);
        if(e.currentTarget.id === "privacy") {
            navigate("/mypage")
        } else {
            navigate(`/mypage/${e.currentTarget.id}`)
        }
    }

    return (
        <MyPageSidebarStyled>
            <div className="mypage-user-img">
            </div>

            <div className="mypage-user-name">
                {name}
            </div>
            
            <div className="mypage-list">
                <div className = "mypage-list-title">《 설정</div>
                <button onClick={handleMypageBtn}
                id="privacy"
                className={activeMenu === 'privacy' ? "mypage-list-items focus" : "mypage-list-items"}>
                    <BiLock />
                    개인정보 수정
                </button>
                <button onClick={handleMypageBtn}
                id="chat"
                className={activeMenu === 'chat' ? "mypage-list-items focus" : "mypage-list-items"}>
                    <BsChatLeftHeart />
                    채팅
                </button>
                <button onClick={handleMypageBtn}
                id="screen"
                className={activeMenu === 'screen' ? "mypage-list-items focus" : "mypage-list-items"}>
                    <MdOutlineScreenShare/>
                    화면
                </button>
                <button onClick={handleMypageBtn}
                id="version"
                className={activeMenu === 'version' ? "mypage-list-items focus" : "mypage-list-items"}>
                    <MdOutlineSentimentSatisfied />
                    버전정보
                </button>
            </div>
        </MyPageSidebarStyled>
  );
}