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
        background: linear-gradient(180deg, #D24D4D, #F8E6E6);
        height: 100vh;
        margin: 30px 10%;
        padding: 60px;
        position: relative;
        border-radius: 26px;
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
            background: #ffffffab;
            border-radius: 0px 21px 15px 30px;
        }
    }

    .mainchat-input {
        width: 80%;
        height: 72px;
        position: absolute;
        bottom: 6%;
        left: 6%;

        input {
            width: 100%;
            height: 100%;
            font-size: 20px;
            border: none;
            position: relative;
            top: 13%;
            border-radius: 8px;
            padding: 10px;
            box-sizing: border-box;
            background: linear-gradient(90deg, rgb(237, 124, 124), rgb(238 197 197));
        }
    }
`