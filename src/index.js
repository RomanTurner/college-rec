import App from "./App";
import React from "react";
import "@fontsource/roboto";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";


const font = "'Lato', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: font,
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 900,
    },
    subtitle1: {
      fontWeight: 900,
    },
    subtitle2: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight:700,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
