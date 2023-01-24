// import MessengerCustomerChat from "react-messenger-customer-chat";
import logo from "./assets/Profile.JPG";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { amber } from "@mui/material/colors";

const App = () => {
  const [theme, settheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        ...amber,
        ...(theme === "dark" && {
          main: amber[300],
        }),
      },
      ...(theme === "dark" && {
        background: {
          default: "#F6F7F2",
          paper: "#000",
        },
      }),
      text: {
        ...(theme === "light"
          ? {
              primary: "#000",
              secondary: "#4F5358",
            }
          : {
              primary: "#fff",
              secondary: "#000",
            }),
      },
    },

    typography: {
      fontFamily: "Jura",
      fontWeightLight: 400,
      fontWeightMedium: 500,
      fontWeightRegular: 700,
      fontWeightBold: 700,
      subtitle1: {
        fontSize: 15,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 700,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // border: "4px dashed  blue",
          flexWrap: "wrap",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Paper>
          {/* <MessengerCustomerChat
            pageId="884562478402337"
            appId="717685243062470"
            htmlRef="<REF_STRING>"
          /> */}
          <Container component="container">
            <Navbar settheme={settheme} />
            <About />
            {/* <Work /> */}
          </Container>
          {/* <Footer /> */}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;
