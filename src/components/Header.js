import "../styles/HeaderStyled.css"
import { Link } from "react-router-dom";

export default function Header() {
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

            <Link to = "/mypage">
                <img src = "images/whiteUser.png" alt = "mypage" className = "header-right" />
            </Link>
        </div>
    )
}