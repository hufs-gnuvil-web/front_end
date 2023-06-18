import React from "react";
import { MyChatStyled } from "../styles/MypageStyled";

export default function MyChat() {
    return(
        <MyChatStyled>
            <div className = "mychat-items">
                <div className = "mychat-img"></div>
                <div className = "mychat-info">
                    <div className = "mychat-info-title">채팅 제목</div>
                    <div className = "mychat-info-txt">채팅 마지막 내용</div>
                </div>
            </div>

            <div className = "mychat-items">
                <div className = "mychat-img"></div>
                <div className = "mychat-info">
                    <div className = "mychat-info-title">채팅 제목</div>
                    <div className = "mychat-info-txt">채팅 마지막 내용</div>
                </div>
            </div>

            <div className = "mychat-items">
                <div className = "mychat-img"></div>
                <div className = "mychat-info">
                    <div className = "mychat-info-title">채팅 제목</div>
                    <div className = "mychat-info-txt">채팅 마지막 내용</div>
                </div>
            </div>
        </MyChatStyled>
    )
}