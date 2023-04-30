import BasicHeader from "../components/BasicHeader";
import { Link } from "react-router-dom";

export default function FinishSignup() {
    return(
        <div className="FinishSignup">
            <BasicHeader />
            <div className = "finish-wrapper">
                <img className = "login-logo" src = "images/logo.png" alt = "logo" />

                <div className = "tos-step">
                    <img src = "images/step1.png" alt = "step1" />
                    <img src = "images/step2ok.png" alt = "step2" />
                    <img src = "images/step3ok.png" alt = "step3" />
                </div>

                <div className = "finish-container">
                    <img src = "images/Title.png" alt = "logo" />
                    <div className = "finish-title">이예은 님<br/>Eat Together 가입을 환영합니다!</div>
                    <div className = "finish-txt">
                        로그인한 후 서비스를 이용하실 수 있습니다
                    </div>
                </div>

                <div className = "tos-button">
                    <Link to = "/">
                        <button className = "tos-button-cancle">홈으로</button>
                    </Link>
                    <Link to = "/login">
                        <button className = "tos-button-ok">로그인</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}