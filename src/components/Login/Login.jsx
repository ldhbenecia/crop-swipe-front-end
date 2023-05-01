import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnChange = (event) => {
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
      <p>Crop Swipe 로그인</p>
      <form className="signInContainer">
        <input
          name="email"
          type="text"
          placeholder="이메일"
          required
          value={email}
          onChange={OnChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={OnChange}
          className="authInput"
        />
        <input
          type="submit"
          className="authInput authSubmit"
        />
      </form>
    </div>
  );
};

export default Login;
