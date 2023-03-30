import styled from "styled-components";

export const MainChatStyle = styled.div `
    .mainchat-address{
        padding: 40px 20% 20px;
    }    

    .mainchat-address-main-left{
        display:flex;
        align-items: center;

        img {
            width: 30px;
        }
    }

    .mainchat-address-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #aeadad;
        border-radius: 6px;
        padding: 10px;
    }

    .mainchat-address-sub {
        display: flex;
        gap: 30px;
        align-items: center;
        text-align: left;
        border: 1px solid rgb(174, 173, 173);
        border-radius: 6px;
        padding: 20px;
        margin-top: 15px;
    }

    .mainchat-address-sub-left {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }

    .mainchat-wrapper {
        background-color: #f7f7f7;
        height: 100vh;
        margin: 30px 10%;
        padding: 60px;
        position: relative;
    }

    .mainchat-chat-contents{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .mainchat-chat {
        display: flex;
        gap: 13px;

        img {
            width: 60px;
        }

        .mainchat-chat-message {
            width: 500px;
            background: #fa8071;
            border-radius: 10px;
            box-shadow: #949494 6px 7px 15px;        
        }
    }

    .mainchat-input {
        width: 96%;
        background: #e9e9e9;
        height: 80px;
        position: absolute;
        bottom: 15px;
        left: 2%;
        border-radius: 10px;

        input {
            width: 86%;
            height: 70%;
            font-size: 20px;
            border: none;
            position: relative;
            top: 13%;
            border-radius: 8px;
            padding: 10px;
            box-sizing: border-box;
            background: #f8f8f8;
        }
    }
`