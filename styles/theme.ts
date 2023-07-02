import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  header: {
    toggleContainerBgColor: "rgba(223, 223, 223, 1)",
    toggleBgColor: "rgba(108, 92, 231, 1.0)",
  },
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  header: {
    toggleContainerBgColor: "rgba(255, 255, 255, 0.61)",
    toggleBgColor: "rgba(108, 92, 231, 1.0)",
  },
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
