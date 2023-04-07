import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1",
    },
  },
  typography: {
    fontFamily: ["Rubik", "Roboto", "sans-serif"].join(","),
  },
});

export default theme;
