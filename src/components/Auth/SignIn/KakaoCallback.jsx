import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { cookieState, isLoggedInState } from "../../../recoil/authState";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access-token", "refresh-token"]);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setCookieState = useSetRecoilState(cookieState);

  useEffect(() => {
    const handleCodeExchange = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        // 코드가 이미 처리되었는지 확인 -> KOE320 방지 토큰
        const isCodeProcessed = localStorage.getItem("isCodeProcessed");
        if (isCodeProcessed) {
          navigate("/");
          return;
        }

        localStorage.setItem("isCodeProcessed", "true");

        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/v1/user/login/kakao/callback?code=${code}`
          );
          // console.log(response.data);

          const accessToken = response.data.access;
          const refreshToken = response.data.refresh;

          setCookies("access-token", accessToken, { path: "/" });
          setCookies("refresh-token", refreshToken, { path: "/" });

          setCookieState({ accessToken, refreshToken });
          setIsLoggedIn(true);

          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleCodeExchange();
  }, [navigate, setCookies, setIsLoggedIn, setCookieState]);

  useEffect(() => {
    const accessToken = cookies["access-token"];
    const refreshToken = cookies["refresh-token"];
    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    }
  }, [cookies, setIsLoggedIn]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default KakaoCallback;
