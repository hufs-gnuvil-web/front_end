import styled from "styled-components";

export const MainChatStyle = styled.div `
    .mainchat-address{
        padding: 40px 20%;
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
        margin: 15px 10%;
    }

`