import { MypageStyled } from "../styles/MypageStyled";
import MyPageHeader from "../components/MyPageHeader";
import MypageSidebar from "../components/MypageSidebar";
import { Routes, Route } from 'react-router-dom';
import React from "react";

import MyChat from "./MyChat";
import MyInfo from "./MyInfo";
import MyVersion from "./MyVersion";
import Myscreen from "./Myscreen";

export default function Mypage() {

    return(
        <MypageStyled>
            <MyPageHeader/>
            <div className = "mypage-wrapper">
                <MypageSidebar />
                <Routes>
                    <Route path="/*" element={<MyInfo/>}></Route>
                    <Route path="/chat" element={<MyChat/>}></Route>
                    <Route path="/version" element={<MyVersion/>}></Route>
                    <Route path="/screen" element={<Myscreen/>}></Route>
                </Routes>
            </div>
        </MypageStyled>
    )
}