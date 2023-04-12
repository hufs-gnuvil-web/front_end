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
        position: relative;
    }

    .main-right-container {
        position: absolute;
        right: 0px;
        top: -50px;
        width: 860px;
    }

    .main-left-container{
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 12px;
        padding: 80px;

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
    
        .main-left-txt{
            font-size: 24px;
            z-index: 99;
        }

        img {
            width: 650px;
            z-index: 99;
        }

        a {
            z-index: 99;
        }
    }

    @media (max-width: 800px) {
        .main-right-container {
            display: none;
        }

        .main-left-container img{
            width: 100%;
        }

        .main-left-container {
            align-items: center;
        }
    }
`