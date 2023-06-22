import React, {useEffect, useState} from "react";
import { MyInfoStyled } from "../styles/MypageStyled";

import {MdPhoneAndroid} from 'react-icons/md';
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import axios from "axios";

export default function MyInfo() {
    let sessionStorage = window.sessionStorage;
    // const [address, setAddress] = useState("");
    const UserURL = "https://falling-fire-8326.fly.dev/user/" + sessionStorage.id + "/info"
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState({});
    const [password, setPassword] = useState("");
    // const [id, setId] = useState("");

    // 정보 변경
    const [nameChange, setNameChange] = useState(false);
    const [numChange, setNumChange] = useState(false);
    const [emailChange, setEmailChange] = useState(false);
    const [addressChange, setAddressChange] = useState(false);

    useEffect(() => {
        // 사용자 정보(주소코드)
        axios.get(UserURL)
        .then((res) => {
                setPassword(res.data.password);
                setEmail(res.data.email);
                setName(res.data.name);
                setPhonenumber(res.data.phonenumber);
                setAddress(res.data.address);
            })
        .catch((error) => {
            alert(error.response.data.message)
        })
    },[]);

    const handleMyInfoChange = (e) => {
        axios
        .put(`https://falling-fire-8326.fly.dev/user/${sessionStorage.id}/edit`,{
            id: sessionStorage.id,
            password: password,
            name: name,
            email: email,
            phonenumber: phonenumber,
            address: address
        })
        .then((res) => {
          console.log(res)
          console.log(res.data)
          alert("수정되었습니다.")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })

        setNameChange(false);
        setNumChange(false);
        setEmailChange(false);
        setAddressChange(false);
    };

    return(
        <MyInfoStyled>
            <div className = "myinfo-basic">
                <div className = "mb-basicinfo">
                    <div className="mb-subject">기본정보</div>
                    <div className = "mb-wrapper">
                        <div className = "mb-img"></div>
                        <div className = "mb-items">
                            { !nameChange ?
                            <div className = "mb-name">
                                <div>{name}</div>
                                <button onClick={(e) => setNameChange(true)}>닉네임 변경</button>
                            </div>
                            :
                            <div className = "mb-name">
                                <input 
                                    type="text" 
                                    defaultValue = {name}
                                    onChange={(e)=>setName(e.target.value)}
                                />
                                <button onClick={handleMyInfoChange}>수정하기</button>
                            </div>
                            }
                            <div>{email}</div>
                        </div>
                    </div>
                </div>
                <div className = "mb-contents">
                    <div className = "mb-title">
                        <MdPhoneAndroid/>
                        <div>전화번호 설정</div>
                    </div>
                    { !numChange ?
                    <div className = "mb-contents-item">
                        <div>{phonenumber}</div>
                        <button onClick={(e) => setNumChange(true)}>수정</button>
                    </div>
                    :
                    <div className = "mb-contents-item">
                        <input 
                            type="number" 
                            defaultValue = {phonenumber}
                            onChange={(e)=>setPhonenumber(e.target.value)}
                        />
                        <button onClick={handleMyInfoChange}>수정하기</button>
                    </div>
                    }
                </div>
                <div className = "mb-contents">
                    <div className = "mb-title">
                        <MdOutlineMailOutline/>
                        <div>이메일 설정</div>
                    </div>
                    { !emailChange ?
                    <div className = "mb-contents-item">
                        <div>{email}</div>
                        <button onClick={(e) => setEmailChange(true)}>수정</button>
                    </div>
                    :
                    <div className = "mb-contents-item">
                        <input 
                            type="text" 
                            defaultValue = {email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />                        
                        <button onClick={handleMyInfoChange}>수정하기</button>
                    </div>
                    }
                </div>
            </div>
            <div className = "myinfo-basic">
                <div className="mb-subject">주소 관리</div>
                { !addressChange ?
                <div className = "mb-contents">
                    <div className = "mb-title">
                        <BsFillHouseDoorFill/>
                        <div>기본 주소</div>
                        <div className = "mb-phonenum">{address.address} {address.detail}</div>
                    </div>
                    <div className = "mb-address-btns">
                        <button onClick={(e) => setAddressChange(true)}>
                            수정
                        </button>
                    </div>                    
                </div>
                :
                <div className = "mb-contents">
                    <div className = "mb-title">
                        <BsFillHouseDoorFill/>
                        <div>기본 주소</div>
                        <div className = "mb-phonenum">
                            <input 
                                type="text" 
                                defaultValue = {address.address}
                                onChange={(e)=>setAddress({
                                    ...address,
                                    address: e.target.value
                                })}
                            />
                            <input 
                                type="text" 
                                defaultValue = {address.detail}
                                onChange={(e)=>setAddress({
                                    ...address,
                                    detail: e.target.value
                                })}
                            />        
                        </div>
                    </div>
                    <div className = "mb-address-btns">
                        <button onClick={handleMyInfoChange}>수정하기</button>
                    </div>                    
                </div>
                }
            </div>
        </MyInfoStyled>
    )
}