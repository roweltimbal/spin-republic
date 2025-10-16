import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "ffffff",
    },
    text: {
      primary: "#000000",
    },
    primary: {
      // main: "#E8006D",
      // dark: "#C7005E",
       main: "#CE0D0D",
      dark: "#A50A0A",
    },
  },
});

export default lightTheme;
