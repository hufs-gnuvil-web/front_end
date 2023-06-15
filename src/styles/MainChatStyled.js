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
        padding-right: 30px;
        position: relative;
        border-radius: 26px;
    }

    .mainchat-chat-contents{
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 90%;
        overflow: auto;
    }

    .mainchat-chat {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .main-chat-message {
        width: max-content;
        background: #ffffffab;
        border-radius: 0px 21px 15px 30px;
        padding: 10px 25px;
    }

    .mainchat-chat-mymessage {
        width: max-content;
        background: rgb(210, 77, 77);
        border-radius: 15px 0px 27px 15px;
        color: white;
        padding: 10px 25px;
        display: flex;
        margin-left: auto;
        margin-right: 20px;
    }

    .mainchat-input {
        width: 80%;
        height: 72px;
        position: absolute;
        bottom: 6%;
        left: 6%;

        .mainchat-addbtn {
            position: absolute;
            z-index: 999;
            bottom: -1px;
            left: 1%;
            width: 56px;
            height: 56px;
            border-radius: 21px;
            border: none;
            font-size: 40px;
            color: white;
            background: #F8CACA;
        }

        input {
            width: 100%;
            height: 100%;
            font-size: 20px;
            border: none;
            position: relative;
            top: 13%;
            border-radius: 21px;
            padding: 10px;
            padding-left: 80px;
            box-sizing: border-box;
            background: linear-gradient(90deg, rgb(237, 124, 124), rgb(238 197 197));
        }

        .mainchat-sendbtn {
            position: absolute;
            z-index: 999;
            bottom: -10px;
            right: -9%;
            width: 72px;
            height: 72px;
            border-radius: 21px;
            border: none;
            background: linear-gradient(100deg, rgb(237, 124, 124), rgb(238, 197, 197));
        }
    }
`