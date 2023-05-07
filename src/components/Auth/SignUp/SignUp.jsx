import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import logo from "../../../assets/images/logo.png";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const SignUp = () => {
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소

  const [isOpenPost, setIsOpenPost] = useState(false); // 팝업 창

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      address: data.get("address"),
      addressDetail: data.get("addressDetail"),
    });
  };

  const handleAddressClick = () => {
    setIsOpenPost(!isOpenPost);
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                color="success"
                required
                fullWidth
                id="firstName"
                label="이름"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="성"
                name="lastName"
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                color="success"
                autoComplete="family-name"
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
                autoComplete="email"
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
                autoComplete="new-password"
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
                  setAddress(data.address);
                  setIsOpenPost(false);
                }}
                autoClose={true}
                width={400}
                height={600}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                  float: "right",
                  fontSize: 15
                }}
                variant="outlined"
                onClick={() => setIsOpenPost(false)}
              >
                닫기
              </Button>
            </div>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
