import styled from "styled-components";

export const MypageStyled = styled.div `
    background : rgb(237 221 221);
    height: 100vh;

    .mypage-wrapper{
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 70px;
        padding: 50px;
    }
`

export const MyInfoStyled = styled.div `
    background: rgb(249, 243, 243);
    width: 1000px;
    height: 500px;
    border-radius: 25px;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .myinfo-basic {
        background: white;
        border-radius: 25px;
        padding: 30px;
        box-sizing: border-box;
        border: 2px solid #8D5252;
        display: flex;
        flex-direction: column;
        gap: 15px;

        button {
            font-family: 'Noto Sans KR';
            background: #ffdcdc;
            color: #d24d4d;
            border-radius: 5px;
            font-weight: bold;
            padding: 5px 10px;
            font-size: 14px;
        }
    }

    .mb-basicinfo {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 10px;
        border-bottom: 1px solid #D8ADAD;
        padding-bottom: 10px;
    }

    .mb-subject {
        font-weight: bold;
        color: #787878;
        text-align: left;
    }

    .mb-img {
        width: 70px;
        height: 70px;
        background: #eddddd;
        border-radius: 50%;
    }

    .mb-name {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }

    .mb-wrapper {
        display : flex;
        gap: 20px;
        align-items: center;
    }

    .mb-items {
        width: 88%;
    }

    .mb-contents {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 18px;
        padding: 0 40px;
    }

    .mb-contents-item {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    .mb-title {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #8D5252;
    }

    .mb-phonenum {
        font-weight: 500;
        color: black;
        padding-left: 20px;
    }

    .mb-address-btns{
        display: flex;
        gap: 15px;

        button {
            color: black;
            background: #E4E4E4;
            border-radius: 20px;
        }
    }
`

export const MyChatStyled = styled.div `
    background: rgb(249, 243, 243);
    width: 1000px;
    height: 500px;
    border-radius: 25px;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .mychat-items {
        display: flex;
        gap: 30px;
        align-items: center;
        text-align: left;
    }

    .mychat-img {
        width: 70px;
        height: 70px;
        background: #eddddd;
        border-radius: 50%;
    }

    .mychat-info-title {
        font-size: 18px;
        font-weight: bold;
    }
`