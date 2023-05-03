import React, { useState } from "react";
import "./Login.scss";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="signInWrapper">
      <div className="signInContainer">
        <img src={logo} alt="Crop Swipe 로고" className="loginLogo" />
        <p className="signInTitle">Crop Swipe 로그인</p>
        <form className="signInForm">
          <input
            name="email"
            type="text"
            placeholder="이메일"
            required
            value={email}
            onChange={onChange}
            className="authInput"
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange}
            className="authInput"
          />
          <button type="submit" className="authInput authSubmit">
            로그인 하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
