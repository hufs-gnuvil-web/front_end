import Header from '../components/Header'
import { MainChatStyle } from "../styles/MainChatStyled";

export default function MainChat() {
    return(
        <MainChatStyle>
            <Header />
            <div className = "mainchat-address">
                <div className = "mainchat-address-main">
                    <div className = "mainchat-address-main-left">
                        <img src = "images/location.png" alt = "id" />
                        <span>이문 1동 ∨</span>
                    </div>
                    <div className = "mainchat-address-main-right">주소 관리 》</div>
                </div>

                <div className = "mainchat-address-sub">
                    <div className = "mainchat-address-sub-left">

                    </div>
                    <div className = "mainchat-address-sub-right">
                        <div>
                            그누빌 님, 이문 1동 근처 107,107명의 이웃들과<br/>
                            배달비 쉐어를 시작해보세요!
                        </div>
                        <div>
                            Write your message here.
                        </div>
                    </div>
                </div>
            </div>
            <div className = "mainchat-wrapper">
                <div className = "mainchat-chat">
                    <div className = "mainchat-chat-user">

                    </div>
                    <div className = "mainchat-chat-message">

                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </MainChatStyle>
    )
}