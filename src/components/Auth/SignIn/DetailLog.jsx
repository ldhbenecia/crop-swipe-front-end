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

import logo from "../../../assets/images/title.png";
import Header from "../../Header/Header";

const DetailLog = () => {
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소
  const [isOpenPost, setIsOpenPost] = useState(false); // 주소 찾기 팝업 창

  // 검사
  const [error, setError] = useState(false); // 에러 여부
  const [validNickName, setValidNickName] = useState(""); // 닉네임 유효성

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

    const { nickName, address, addressDetail } = joinData;

    // 닉네임 유효성 체크
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(nickName) || nickName.length < 1) {
      setError(true);
      setValidNickName("올바른 이름을 입력해주세요.");
    } else {
      setError(false);
      setValidNickName("");
    }

    //   // 모두 확인되었을 때 서버로 데이터 요청
    //   if (
    //     emailRegex.test(email) &&
    //     passwordRegex.test(password) &&
    //     password === confirmPassword &&
    //     nameRegex.test(nickName)
    //   ) {
    //     onhandlePost(joinData);
    //   }
  };

  const handleAddressClick = () => {
    setIsOpenPost(!isOpenPost); // 초기 값: 닫힘 설정
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ height: 110 }} src={logo} alt="titleLogo"></img>
          <Typography component="h1" variant="h4">
            CropSwipe
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
                    autoComplete="given-name"
                    name="phoneNumber"
                    inputProps={{ style: { fontSize: 15 } }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    color="success"
                    required
                    fullWidth
                    id="phoneNumber"
                    label="휴대폰 번호"
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
    </>
  );
};

export default DetailLog;
