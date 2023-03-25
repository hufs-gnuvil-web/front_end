import Header from '../components/Header'
import "../styles/MainChatStyled.css"

export default function MainChat() {
    return(
        <div className = "MainChat">
            <Header />
            <div className = "mainchat-address">

            </div>
            <div className = "mainchat-wrapper">
                <div className = "mainchat-chat">
                    <div className = "mainchat-chat-user">

                    </div>
                    <div className = "mainchat-chat-message">

                    </div>
                </div>
            </div>
        </div>
    )
}