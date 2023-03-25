import BasicHeader from "../components/BasicHeader";
import "../styles/SignupStyled.css"
import "../styles/LoginStyled.css"

export default function Signup() {
    return(
        <div className = "Signup">
            <BasicHeader />
            <div className = "signup-wrapper">
                <div className = "login-logo">

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
                        <input 
                            type="text"
                        />
                        <select>
                            <option value="input">직접 입력</option>
                            <option value="naver">naver.com</option>
                            <option value="google">google.com</option>
                            <option value="hufs">hufs.ac.kr</option>
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
            </div>
        </div>
    )
}