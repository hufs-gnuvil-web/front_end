import "../styles/HeaderStyled.css"
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
    const handlelogout = () => {
        sessionStorage.removeItem('id')
        document.location.href = '/'
    }
    return (
        <div className = "Header">
            <div className="header-left">
                <div className = "header-logo">
                    <img src = "images/title.png" alt = "id" />
                </div>
                <div className = "header-search">
                    <input type="text"/>
                </div>
            </div>

            <div className = "header-right-my">
                <Link to = "/mypage">
                    <img src = "images/whiteUser.png" alt = "mypage" className = "header-right"/>
                </Link>
                <img src = "images/logout.png" alt = "logout" className = "header-right" onClick = {handlelogout}/>
            </div>
        </div>
    )
}