import styled from "styled-components";

export const CreateChatStyled = styled.div `
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
        }
    }
`
  
export const PopupChatStyled = styled.div `

`