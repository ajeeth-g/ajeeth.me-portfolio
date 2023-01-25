import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { Box, createTheme } from "@mui/material";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 18 || currentTime < 6) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    checkTime();
    const intervalId = setInterval(checkTime, 600000);
    return () => clearInterval(intervalId);
  }, []);
  const darkTheme = createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === "light" ? "#F6F7F2" : "#000000",
        paper: theme === "light" ? "#F6F7F2" : "#000000",
      },
      text: {
        primary: theme === "light" ? "#000000" : "#FFFFFF",
        secondary: "#4F5358",
      },
    },

    typography: {
      fontFamily: "Jura",
      fontWeightLight: 400,
      fontWeightMedium: 500,
      fontWeightRegular: 700,
      fontWeightBold: 700,
      h1: {
        fontSize: 15,
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
        <Container>
          <Navbar settheme={setTheme} />
          <About />
          <Work />
        </Container>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
