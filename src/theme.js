import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: "#102332",
      main: "#1976d2",
    },
    secondary: {
      main: "#ff6d02",
      contrastText: "#FFF",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default theme;
