import "../styles/LoginStyled.css"
import BasicHeader from "../components/BasicHeader";
import { Link } from "react-router-dom";

export default function Login() {

    return(
        <div className = "Login">
            <BasicHeader />
            <div className = "login-wrapper">
                <img className = "login-logo" src = "images/logo.png" alt = "logo" />
                
                <div className = "login-inputs">
                    <div className = "login-inputs-items">
                        <div className = "login-inputs-img">
                            <img src = "images/user.png" alt = "id" />
                        </div>
                        <input 
                            type="text"
                            placeholder="id"
                        />
                    </div>
                    <div className = "login-inputs-items">
                        <div className = "login-inputs-img">
                            <img src = "images/key.png" alt = "pw" />
                        </div>
                        <input 
                            type="password"
                            placeholder="password"
                        />
                    </div>

                    <div className = "login-input-sub">
                        <div>
                            <input
                                type="checkbox"
                                value="save"
                            />
                            <span>아이디 저장</span>
                        </div>
                        <div>
                            비밀번호 찾기
                        </div>
                    </div>
                </div>

                <div className = "login-btns">
                    <Link to = "/signup">
                        <button className = "login-btn-signup">
                            회원가입
                        </button>
                    </Link>
                        <button className = "login-btn-login">
                            로그인
                        </button>
                </div>
                 
                <div className = "login-sns">
                    <div>SNS 계정으로 로그인하기</div>
                    <div className = "login-sns-btns">
                        <div className = "login-sns-naver">
                            <img src = "images/naver.png" alt = "naver" />
                        </div>
                        <div className = "login-sns-kakao">
                            <img src = "images/kakao.png" alt = "kakao" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}