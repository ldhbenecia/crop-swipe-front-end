import React from "react";
import Header from "../../Header/Header";
import "./SignIn.scss";

const SignIn = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <Header />
      <div className="SignIn-Wrap">
        <div className="intro">
          <p>간편하게 로그인하고</p>
          <h2 className="bold-intro">
            세상에 하나뿐인
            <br />
            특별한 프로젝트를 발견해보세요.
          </h2>
          <button className="kakao-button" onClick={handleLogin}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 3.25C6.99238 3.25 2.16663 6.99718 2.16663 11.5825C2.3636 14.7381 4.33329 17.4498 7.18935 18.6332L6.15526 22.3803C6.10602 22.4789 6.15526 22.6269 6.25375 22.6757C6.35223 22.7748 6.5492 22.7748 6.64769 22.6757L11.0303 19.7672C11.6704 19.8658 12.3106 19.9151 13 19.9151C18.9583 19.9151 23.8333 16.1679 23.8333 11.5825C23.8333 6.99718 19.0075 3.25 13 3.25"
                fill="black"
                fillOpacity="0.9"
              ></path>
            </svg>
            카카오로 로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
