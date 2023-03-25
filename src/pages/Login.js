import "../styles/Login.css"
import BasicHeader from "../components/BasicHeader"
export default function Login() {
    return(
        <div className = "Login">
            <BasicHeader />
            <div className = "login-wrapper">
                <div className = "login-logo">

                </div>
                
                <div className = "login-inputs">
                    <input 
                        className = "login-input-id"
                        type="text"
                        placeholder="id"
                    />
                    <input 
                        className = "login-input-pw"
                        type="password"
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
                <div className = "login-btns">
                    <button className = "login-btn-signup">
                        회원가입
                    </button>
                    <button className = "login-btn-login">
                        로그인
                    </button>
                </div>
                
                <div className = "login-sns">
                    <div>--------SNS 계정으로 로그인하기--------</div>
                    <div>
                        <div className = "login-btn-naver">
                        
                        </div>
                        <div className = "login-btn-kakao">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}