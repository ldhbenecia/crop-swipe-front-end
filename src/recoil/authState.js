import { atom } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

export const cookieState = atom({
  key: "cookieState",
  default: {
    accessToken: "",
    refreshToken: "",
  },
});
