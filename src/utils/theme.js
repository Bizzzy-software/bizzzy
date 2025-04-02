import { FONTS } from "./fonts";
import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: "#FFA26B",
    secondary: "#A6A3B8",
    primary_text: "white",
    secondary_text: "#767474",
    background: "#F9F9FF",
    success: "#19BC33",
    error: "#DC143C",
    black: "#131212",
    icon: "#494949",
    tabIcon: "#797979",
    greyOutline: "#8A8D9F",
  },
  darkColors: {
    primary: "#FFA26B",
    secondary: "##A6A3B8",
    primary_text: "black",
    black: "#131212",
    secondary_text: "#898989",
    background: "#F9F9FF",
    success: "#19BC33",
    error: "#DC143C",
    icon: "#ECECEC",
    tabIcon: "#B6B5B5",
    greyOutline: "#8A8D9F",
  },
  components: {
    Text: {
      style: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
    },
    Chip: {
      titleStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
      disabledTitleStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
    },
    Button: {
      titleStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
      disabledTitleStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
    },
    Input: {
      inputStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
      labelStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
      errorStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
    },
    CheckBox: {
      textStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
    },
    ButtonGroup: {
      textStyle: {
        letterSpacing: 0.5,
        fontFamily: FONTS.M_400,
      },
    },
  },
});
