import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {MyPageSidebarStyled} from '../styles/ComponentStyled'
import {BiLock} from 'react-icons/bi';
import {BsChatLeftHeart} from 'react-icons/bs';
import {MdOutlineScreenShare} from 'react-icons/md';
import {MdOutlineSentimentSatisfied} from 'react-icons/md';

export default function MypageSidebar() {

    const [activeMenu, setActiveMenu] = useState("privacy");
    const navigate = useNavigate();

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
                {sessionStorage.name}
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