import React, { useState } from 'react';

import BasicHeader from "../components/BasicHeader";
import PostAddress from "../components/PostAddress";

import "../styles/SignupStyled.css"
import "../styles/LoginStyled.css"

import { Link } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState('');
    const onChangeInput = (e) => {
      setEmail(e.target.value);
    };

    // 주소 검색 팝업
    const [popup, setPopup] = useState(false);
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });
    
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
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
                        placeholder="6-13자의 영문 소문자와 숫자만 사용이 가능합니다."
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">사용자 비밀번호를 입력해주세요.</div>
                    <input 
                        type="password"
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
                        type="text"
                        placeholder="사용자 이름"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">이메일 주소를 입력해주세요.</div>
                    <div className = "signup-email">
                        <input 
                            type="text"
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
                        type="text"
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">주소를 입력해주세요.</div>
                    <div className = "signup-address">
                        <input 
                            type="text"
                            required={true} name="address" onChange={handleInput} value={enroll_company.address}
                        />
                        <button onClick={()=>{
                            setPopup(!popup)
                        }}>주소 검색</button>
                    </div>
                        {popup && <PostAddress company={enroll_company} setcompany={setEnroll_company}></PostAddress>
                    }
                    <input
                        type = "text"
                    />
                </div>

                <Link to = "/success">
                    <button className = "signup-btn">
                        가입하기
                    </button>
                </Link>
                {/* <DaumPostcode></DaumPostcode> */}
            </div>
        </div>
    )
}