import React, { useState } from "react";
import { Container } from "@mui/system";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [theme, settheme] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mood: theme,
      background: {
        default: "#F6F7F2",
      },
      secondary: {
        main: "#4F5358",
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
        }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Container component="Container">
          <Navbar />
          <About />
          <Work />
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
