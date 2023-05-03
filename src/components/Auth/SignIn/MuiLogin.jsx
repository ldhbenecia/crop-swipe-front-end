import { Box, Button, Container, TextField, Typography } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import React from "react";

const MuiLogin = () => {
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
        <img style={{height: 110}}
        src={logo}></img>
        <Typography component="h1" variant="h5">
          CropSwipe
        </Typography>
        <TextField
          margin="normal"
          label="이메일"
          color="success"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          label="비밀번호"
          type="password"
          color="success"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인 하기
        </Button>
      </Box>
    </Container>
  );
};

export default MuiLogin;


