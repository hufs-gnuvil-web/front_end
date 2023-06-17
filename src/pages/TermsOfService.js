import React, {useState} from "react";
import BasicHeader from "../components/BasicHeader";
import "../styles/LoginStyled.css"
import { Link, useNavigate } from "react-router-dom";

export default function TermsOfService() {
    const [allAgreed, setAllAgreed] = useState(false);
    const [agreements, setAgreements] = useState({
        serviceAgreed : false,
        personalAgreed : false,
        locationAgreed : false,
    });
    const navigate = useNavigate();

    const handleAgreementChange = (e) => {
        const {name, checked} = e.target;
        setAgreements((prevAgreements) => ({...prevAgreements, [name]: checked}));

        const allChecked = Object.values({...agreements, [name]: checked}).every(
            (value) => value === true
        );
        setAllAgreed(allChecked);
    }

    const handleAllAgreementChange = (e) => {
        debugger

        const {checked} = e.target;
        setAgreements((prevAgreements) => 
            Object.keys(prevAgreements).reduce(
                (newAgreements, agreementKey) => ({
                    ...newAgreements,
                    [agreementKey]: checked,
                }),
                {}
            )
        );
        setAllAgreed(checked);
    };

    const goNext = () => {
        if(agreements.serviceAgreed === false || agreements.personalAgreed === false) {
            alert("필수항목을 체크해주세요")
        } else {
            navigate("/signup");
        }
    }

    return(
        <div className = "Login">
            <BasicHeader />
            <img className = "login-logo" src = "images/logo.png" alt = "logo" />
            {/* step을 공통 컴포넌트로 빼내서 안에 내용만 스텝별로 바꾸게 해보기 */}
            <div className = "tos-wrapper">
                <div className = "tos-step">
                    <img src = "images/step1.png" alt = "step1" />
                    <img src = "images/step2.png" alt = "step2" />
                    <img src = "images/step3.png" alt = "step3" />
                </div>

                <div className = "tos-container">
                    <div className = "tos-check-all">
                        <input
                            type="checkbox"
                            name = "all"
                            checked = {allAgreed}
                            onChange = {handleAllAgreementChange}
                        />
                        <div>회원가입 이용약관, 개인정보 수집 및 이용 (필수) / 정보 수신 동의 (선택) 전체 동의합니다.</div>
                    </div>

                    <div className = "tos-check-items">
                        <div className = "tos-check-title">
                            <input
                                type="checkbox"
                                name = "serviceAgreed"
                                checked = {agreements.serviceAgreed}
                                onChange = {handleAgreementChange}                        
                            />
                            <div>서비스 이용약관 동의</div><span> (필수)</span>
                        </div>
                        <div className = "tos-check-txt">
                            ‘Eat Together’ 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 ‘Eat Together’ 서비스의 이용과 관련하여 서비스를 제공하는 ‘Eat Together’ 주식회사(이하 Eat Together)와 이를 이용하는 Eat Together 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 Eat Together 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                            Eat Together 서비스를 이용하시거나 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
                        </div>
                    </div>

                    <div className = "tos-check-items">
                        <div className = "tos-check-title">
                            <input
                                type="checkbox"
                                name = "personalAgreed"
                                checked = {agreements.personalAgreed}
                                onChange = {handleAgreementChange}    
                            />
                            <div>개인정보 수집 및 이용 동의</div><span> (필수)</span>
                        </div>
                        <div className = "tos-check-txt">
                            개인정보보호법에 따라 ‘Eat Together’에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                            1. 수집하는 개인정보
                            이용자는 회원가입을 하지 않아도 정보 검색, 채팅창 보기 등 대부분의 Eat Together 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 채팅창, 마이 페이지 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입   
                        </div>
                    </div>

                    <div className = "tos-check-items">
                        <div className = "tos-check-title">
                            <input
                                type = "checkbox"
                                name = "locationAgreed"
                                checked = {agreements.locationAgreed}
                                onChange = {handleAgreementChange}    
                            />
                            <div>위치정보 이용 동의</div><span> (선택)</span>
                        </div>

                        <div className = "tos-check-txt">
                            위치기반서비스 이용약관에 동의하시면, 위치를 활용한 광고 정보 수신 등을 포함하는 ‘Eat Together’ 위치기반 서비스를 이용할 수 있습니다.
                            제 1 조 (목적)
                            이 약관은 Eat Together 주식회사 (이하 “회사”)가 제공하는 위치기반서비스와 관련하여 회사와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                            제 2 조 (약관 외 준칙)
                        </div>
                    </div>
                </div>

                <div className = "tos-total-txt">
                    정보 주체는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 다만, 동의하지 않으실 경우 일부 서비스 이용이 제한됩니다.
                </div>

                <div className = "tos-button">
                    <Link to = "/">
                        <button className = "tos-button-cancle">취소</button>
                    </Link>
                    <button className = "tos-button-ok" onClick={goNext}>다음</button>
                </div>

            </div>
        </div>
    )
}