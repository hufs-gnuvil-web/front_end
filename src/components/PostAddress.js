import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.sethome({
            ...props.home,
            address:fullAddress,
        })
    }

    const postCodeStyle = {
        background : "rgba(0,0,0,0.25)",
        position: "fixed",
        top: 0,
        width: "50%",
        height: "70%",
        zIndex: 100, 
    };

  return (
    <>
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={complete}
        />
    </>
  );
};

export default Post;