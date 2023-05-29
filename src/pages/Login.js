import React,{useState} from 'react'
import "../styles/LoginStyled.css"
import BasicHeader from "../components/BasicHeader";
import { Link } from "react-router-dom";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    // const [user, setUser] = useState('');
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    let sessionStorage = window.sessionStorage;

    const ClickLogin = (e) => {
        e.preventDefault();
        // const data = new FormData(event.currentTarget);
        axios
        .post("https://falling-fire-8326.fly.dev/user/login",{
          id: id,
          password: password,
        })
        .then((res) => {
          console.log(res)
          console.log(res.data)

          sessionStorage.setItem("id", id);
          sessionStorage.setItem("name", res.data.name)
          
          alert(res.data.name + "님 반갑습니다.")
        //   debugger
          navigate("/", {replace:true});
        })
        .catch((error) => {
            debugger
            alert(error.response.data.message)
        })
    
      };

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
                            name = {id}
                            onChange={(e) => {setId(e.target.value)}}
                        />
                    </div>
                    <div className = "login-inputs-items">
                        <div className = "login-inputs-img">
                            <img src = "images/key.png" alt = "pw" />
                        </div>
                        <input 
                            type="password"
                            placeholder="password"
                            name = {password}
                            onChange={(e) => {setPassword(e.target.value)}}
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
                    <Link to = "/terms">
                        <button className = "login-btn-signup">
                            회원가입
                        </button>
                    </Link>
                        <button className = "login-btn-login" onClick={ClickLogin}>
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