import React, { useState } from 'react';

import BasicHeader from "../components/BasicHeader";
import "../styles/SignupStyled.css"
import "../styles/LoginStyled.css"
import DaumPostcode from 'react-daum-postcode';

export default function Signup() {
    const [inputValue, setInputValue] = useState('');
    const onChangeInput = (e) => {
      setInputValue(e.target.value);
    };

    return(
        <div className = "Signup">
            <BasicHeader />
            <div className = "signup-wrapper">
                <img className = "login-logo" src = "images/logo.png" alt = "logo" />

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
                        type="text"
                        placeholder="영문, 숫자, 특수문자를 조합하여 6-13자로 작성해주세요."
                    />
                </div>

                <div className = "signup-items">
                    <div className = "signup-items-txt">비밀번호 확인</div>
                    <input 
                        type="text"
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
                        <input type="text" value={inputValue}/>

                        <select value = {inputValue} onChange={onChangeInput}>
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
                        />
                        <button>주소 검색</button>
                    </div>
                    <input
                        type = "text"
                    />
                </div>

                <button className = "signup-btn">
                    가입하기
                </button>
                {/* <DaumPostcode></DaumPostcode> */}
            </div>
        </div>
    )
}