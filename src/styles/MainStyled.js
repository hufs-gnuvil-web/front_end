import styled from "styled-components";

export const MainStyle = styled.div `
    background: #F8E6E6;
    height: 100vh;
    overflow: hidden;

    .mainHeader {
        display: flex;
        justify-content: space-between;
        padding: 10px 70px;
        align-items: center;
    }

    .mainHeader-logo{
        width: 70px;
    }

    .header:second-child{
        width: 50px;
        height: 50px;
    }

    .main-wrapper {
        padding: 10px 70px;
        display: flex;
    }

    .main-right-container {
        position: absolute;
        right: 10px;
        top: -20px;
    }

    .main-left-container{
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 12px;
        padding-top: 50px;
        
        button{
            border: none;
            background: #D24D4D;
            padding: 20px;
            font-size: 24px;
            border-radius: 12px;
            color: white;
            box-shadow: 3px 3px 12px #908d8d;
            cursor: pointer;
        }
        
        img {
            width: 650px;
        }

        .main-left-txt{
            font-size: 24px;
        }

    }
`