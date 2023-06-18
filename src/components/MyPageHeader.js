import "../styles/HeaderStyled.css"
import { Link } from "react-router-dom";
import { MyPageHeaderStyled } from "../styles/ComponentStyled";

export default function MyPageHeader() {
    return (
        <MyPageHeaderStyled>
            <Link to = "/*">
                <img src={process.env.PUBLIC_URL + '/images/blacklogo.png'} alt="ET"/>
            </Link>
        </MyPageHeaderStyled>
    )
}