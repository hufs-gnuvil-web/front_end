import React, { useState } from 'react';

import BasicHeader from "../components/BasicHeader";
import PostAddress from "../components/PostAddress";

import "../styles/SignupStyled.css"
import "../styles/LoginStyled.css"

import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate();

    // 이메일 주소 합치기
    const [email, setEmail] = useState('');
    const [emailId, setEmailId] = useState('');
    const [fullEmail, setFullEmail] = useState('');
    const onChangeInput = (e) => {
      setEmail(e.target.value);
      setFullEmail(emailId + "@" + e.target.value);
    };

    // 주소 검색 팝업
    const [popup, setPopup] = useState(false);
    const [enroll_home, setEnroll_home] = useState({
        address:'',
        detail:'',
    });
    
    // 주소, 세부주소 구별
    const handleAddress = (e) => {
        setEnroll_home({
            ...enroll_home,
            [e.target.name]:e.target.value,
        })
    }

    // const handleDetail = (e) => {
    //     setEnroll_home({
    //         ...enroll_home,
    //         [e.target.name]:e.target.value,
    //     })
    // }
    // 회원가입
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phonenumber, setPhone] = useState("");

    // const address = "인천남동구논고개로10";

    const ClickSingup = () => {
        axios
        .post("https://falling-fire-8326.fly.dev/user/signup", {
            id: id,
            password: password,
            name: name,
            email: fullEmail,
            phonenumber : phonenumber,
            address: enroll_home,
            // address: address,
        })
        .then((response) => {
          alert('회원가입 성공!');
        //   console.log('User profile', response.data.email);
          console.log("User token", response.config.data);          ;
        //   localStorage.setItem('token', response.data.jwt);
          navigate("/success", {replace:true});
        })
        .catch((error) => {
            debugger
            alert("An error occured", error.message);
        })
      }
    

    return(
        <div className = "Signup">
            <BasicHeader />
            <div className = "signup-wrapper">
                <img className = "login-logo" src = "images/logo.png" alt = "logo" />

                <div className = "tos-step">
                    <img src = "images/step1.png" alt = "step1" />
                    <img src = "images/step2ok.png" alt = "step2" />
                    <img src = "images/step3.png" alt = "step3" />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 아이디를 입력해주세요.</div>
                    <input 
                        type="text"
                        value = {id}
                        onChange = {(e) => {setId(e.target.value)}}
                        placeholder="6-13자의 영문 소문자와 숫자만 사용이 가능합니다."
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 비밀번호를 입력해주세요.</div>
                    <input 
                        type="password"
                        value = {password}
                        onChange = {(e) => {setPassword(e.target.value)}}
                        placeholder="영문, 숫자, 특수문자를 조합하여 6-13자로 작성해주세요."
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">비밀번호 확인</div>
                    <input 
                        type="password"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 이름을 입력해주세요.</div>
                    <input 
                        value = {name}
                        onChange = {(e) => {setName(e.target.value)}}
                        type="text"
                        placeholder="사용자 이름"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">이메일 주소를 입력해주세요.</div>
                    <div className = "signup-email">
                        <input 
                            type="text"
                            value = {emailId}
                            onChange = {(e) => {setEmailId(e.target.value)}}
                        />
                        @
                        <input type="text" value={email}/>

                        <select value = {email} onChange={onChangeInput}>
                            <option value="">직접 입력</option>
                            <option value="naver.com">naver.com</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value="hufs.ac.kr">hufs.ac.kr</option>
                        </select>
                    </div>
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">휴대폰 번호를 입력해주세요.</div>
                    <input 
                        value = {phonenumber}
                        onChange = {(e) => {setPhone(e.target.value)}}
                        type="text"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">주소를 입력해주세요.</div>
                    <div className = "signup-address">
                        <input 
                            type="text"
                            onChange={handleAddress} 
                            value={enroll_home.address}
                            />
                        <button onClick={()=>{
                            setPopup(!popup)
                        }}>주소 검색</button>
                    </div>
                        {popup && <div><PostAddress home={enroll_home} sethome={setEnroll_home}></PostAddress></div>
                    }
                    <input
                        type = "text"
                        name = "detail"
                        onChange={handleAddress} 
                        value={enroll_home.detail}
                    />
                </div>

                {/* <Link to = "/success"> */}
                    <button className = "signup-btn" onClick={()=>{ClickSingup()}}>
                        가입하기
                    </button>
                {/* </Link> */}
            </div>
        </div>
    )
}