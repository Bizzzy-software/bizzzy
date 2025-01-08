// import { FONTS } from "./fonts";
import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: "#242222",
    secondary: "#F0F0F0",
    primary_text: "white",
    secondary_text: "#767474",
    background: "white",
    success: "#19BC33",
    error: "#DC143C",
    black: "#131212",
    icon: "#494949",
    tabIcon: "#797979",
    greyOutline: "#B6B5B5",
  },
  darkColors: {
    primary: "#ECECEC",
    secondary: "#242222",
    primary_text: "black",
    secondary_text: "#898989",
    background: "#131212",
    success: "#19BC33",
    error: "#DC143C",
    icon: "#ECECEC",
    tabIcon: "#B6B5B5",
    greyOutline: "#767474",
  },
});
