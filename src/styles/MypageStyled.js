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

    .myinfo-basic {
        background: white;
        border-radius: 25px;
        padding: 10px 30px;
        box-sizing: border-box;
        border: 2px solid #8D5252;
    }

    .mb-basicinfo {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 10px;
    }

    .mb-img {
        width: 70px;
        height: 70px;
        background: #eddddd;
        border-radius: 50%;
    }

    .mb-name {
        display: flex;
        justify-content: space-between;
    }

    .mb-wrapper {
        display : flex;
        gap: 20px;
        align-items: center;
    }
`