import { MainStyle } from "../styles/MainStyled";
import { Link } from "react-router-dom";

export default function MainPage() {
    return(
        <MainStyle>
            <div className = "mainHeader">
                <img className = "mainHeader-logo" src = "images/logo.png" alt = "logo" />
                <Link to = "/login">
                    <img src = "images/profile-user.png" alt = "mypage" />
                </Link>
            </div>
            <div className = "main-wrapper">
                <div className = 'main-left-container'>
                    <img src = "images/Title.png" alt = "id" />
                    <div className = "main-left-txt">함께 나누는 배달비</div>
                    <Link to = '/chat'><button>Know More</button></Link>
                </div>
                <img className = "main-right-container" src = "images/background.png" alt = "id" />
            </div>
        </MainStyle>
    )
}