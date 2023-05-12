import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
} from "@mui/material";
import DaumPostcode from "react-daum-postcode";

import logo from "../../../assets/images/logo.png";

const SignUp = () => {
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소
  const [isOpenPost, setIsOpenPost] = useState(false); // 주소 찾기 팝업 창

  // 검사
  const [error, setError] = useState(false); // 에러 여부
  const [validNickName, setValidNickName] = useState(""); // 닉네임 유효성
  const [validEmail, setValidEmail] = useState(""); // 이메일 유효성
  const [validPassword, setValidPassword] = useState(""); // 비밀번호 유효성
  const [checkPassword, setCheckPassword] = useState(""); // 비밀번호 동일성

  // Form 전송
  const handleSubmit = (event) => {
    event.preventDefault();

    // 입력 데이터 출력 확인
    const data = new FormData(event.currentTarget);
    const joinData = {
      nickName: data.get("nickName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      address: data.get("address"),
      addressDetail: data.get("addressDetail"),
    };

    const {
      nickName,
      email,
      password,
      confirmPassword,
      //address,
      //addressDetail,
    } = joinData;

    // 닉네임 유효성 체크
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(nickName) || nickName.length < 1)
      setValidNickName("올바른 이름을 입력해주세요.");
    else setValidNickName("");

    // 이메일 유효성 체크
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email)) {
      setError(true);
      setValidEmail("올바른 이메일 주소가 아닙니다.");
    } else {
      setError(false);
      setValidEmail("");
    }

    // 비밀번호 유효성 체크
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password)) {
      setError(true);
      setValidPassword(
        "비밀번호는 영문, 숫자, 특수문자 조합 8자 이상 입력해 주세요."
      );
    } else {
      setError(false);
      setValidPassword("");
    }

    // 비밀번호 같은지 체크
    if (password !== confirmPassword) {
      setError(true);
      setCheckPassword("비밀번호가 일치하지 않아요.");
    } else {
      setError(false);
      setCheckPassword("");
    }
  };

  const handleAddressClick = () => {
    // 주소 찾기 클릭
    setIsOpenPost(!isOpenPost); // 초기 값: 닫힘 설정
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ height: 110 }} src={logo} alt="titleLogo"></img>
        <Typography component="h1" variant="h3">
          CropSwipe
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl component="fieldset" variant="standard">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="nickName"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  color="success"
                  required
                  fullWidth
                  id="nickName"
                  label="닉네임"
                  type="text"
                  autoFocus
                  error={error}
                  helperText={validNickName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  color="success"
                  type="email"
                  error={error}
                  helperText={validEmail}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  label="비밀번호"
                  color="success"
                  type="password"
                  id="password"
                  error={error}
                  helperText={validPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  label="비밀번호 확인"
                  color="success"
                  type="confirmpassword"
                  id="confirmpassword"
                  error={error}
                  helperText={checkPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="주소"
                  name="address"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  color="success"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="addressDetail"
                  label="상세주소"
                  name="addressDetail"
                  inputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                  color="success"
                  value={addressDetail}
                  onChange={(e) => setAddressDetail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleAddressClick}
                  sx={{ fontSize: 15 }}
                >
                  주소 찾기
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2, fontSize: 15 }}
            >
              회원가입 하기
            </Button>
            {isOpenPost && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "1rem",
                  minWidth: "400px",
                  minHeight: "500px",
                }}
              >
                <DaumPostcode
                  onComplete={(data) => {
                    setAddress(data.address); // 선택한 주소 값 저장
                    setIsOpenPost(false); // false로 전환해서 창 닫힘 설정
                  }}
                  autoClose={true}
                  width={400}
                  height={600}
                />
                <Button
                  sx={{
                    marginTop: "1rem",
                    float: "right",
                    fontSize: 15,
                  }}
                  variant="outlined"
                  onClick={() => setIsOpenPost(false)}
                >
                  닫기
                </Button>
              </div>
            )}
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
