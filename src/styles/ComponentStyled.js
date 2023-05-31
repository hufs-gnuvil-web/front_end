import styled from "styled-components";

export const CreateChatStyled = styled.div `
    font-family: 'Noto Sans KR';

    .cc-header {
        background: #D3D3D3;
        height: 50px;
        display: flex;

        button {
            margin-left: auto;
            font-size: 21px;
            margin-right: 20px;
            border: none;
            background: none;
        }
    }
    
    .cc-inputwrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px 40px;

        .cc-input-roomname {
            border: none;
            border-bottom: 2px solid #D02D2D;
            font-size: 18px;
        }

        .cc-input {
            display: flex;
            gap: 10px;
            align-items: center;

            img {
                width: 25px;
            }
        }

        input {
            border: none;
            font-size: 16px;
            padding: 5px;
            width: 100%;
        }

        .cc-savebtn{
            height: 50px;
            border: none;
            background: #D24D4D;
            color: white;
            font-family: 'Noto Sans KR';
            font-size: 16px;
            border-radius: 7px;
            margin-top: 14%;
        }
    }
`
  
export const PopupChatStyled = styled.div `
    .pc-roomname{
        margin: auto;
        background: #FFDCDC;
        height: 50px;
        border-radius: 15px;
        box-shadow: 2px 4px 10px #0000007d;
        width: 80%;
        padding: 13px;
        box-sizing: border-box;
        font-family: 'Noto Sans KR';
    }

    .pc-wrapper {
        background: radial-gradient(#D24D4D, transparent);
        height: 100vh;
        margin: 30px 5%;
        border-radius: 26px;
        padding: 20px 40px;
        box-sizing: border-box;
        font-family: 'Noto Sans KR';
    }

    .pc-chat-contents{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .pc-mychat {
        width: fit-content;
        background: white;
        border: 1px solid #D02D2D;
        border-radius: 21px 35px 0px 15px;
        padding: 6px 20px;
        margin-left: auto;
    }

    .pc-chat-message {
        width: fit-content;
        background: white;
        border: 1px solid #00000087;
        border-radius: 0px 21px 15px 35px;
        padding: 6px 20px;
    }

    .pc-chat-sender {
        font-size: 13px;
    }
`