import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    const handleCodeExchange = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/v1/user/login/kakao/callback?code=${code}`
          );
          console.log(response.data); // 서버 응답을 확인하기 위해 콘솔에 출력

          // 받아온 토큰을 쿠키에 저장
          const token = response.data.token;
          setCookie("token", token, { path: "/" });

          // 로그인이 되면 메인 페이지로 이동
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleCodeExchange();
  }, [navigate]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default KakaoCallback;
