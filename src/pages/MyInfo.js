import React, {useEffect, useState} from "react";
import { MyInfoStyled } from "../styles/MypageStyled";

import axios from "axios";

export default function MyInfo() {
    let sessionStorage = window.sessionStorage;
    // const [address, setAddress] = useState("");
    const UserURL = "https://falling-fire-8326.fly.dev/user/" + sessionStorage.id + "/info"
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState({});

    useEffect(() => {
        // 사용자 정보(주소코드)
        axios.get(UserURL)
        .then((res) => {
                setEmail(res.data.email);
                setName(res.data.name);
                setPhonenumber(res.data.phonenumber);
                setAddress(res.data.address);
            })
        .catch((error) => {
            alert(error.response.data.message)
        })
    },[]);

    return(
        <MyInfoStyled>
            <div className = "myinfo-basic">
                <div className = "mb-basicinfo">
                    <div>기본정보</div>
                    <div className = "mb-wrapper">
                        <div className = "mb-img"></div>
                        <div className = "mb-itmes">
                            <div className = "mb-name">
                                <div>{name}</div>
                                <button>닉네임 변경</button>
                            </div>
                            <div>{email}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        전화번호 설정
                    </div>
                    <div>
                        {phonenumber}
                    </div>
                    <button>
                        수정
                    </button>
                </div>
                <div>
                    <div>
                        이메일 설정
                    </div>
                    <div>
                        {email}
                    </div>
                    <button>
                        수정
                    </button>
                </div>
            </div>
            <div className = "myinfo-address">
                <div>주소 관리</div>
                <div>
                    <div>
                        <div>기본 주소</div>
                        <div>{address.address}</div>
                    </div>
                </div>
            </div>
        </MyInfoStyled>
    )
}