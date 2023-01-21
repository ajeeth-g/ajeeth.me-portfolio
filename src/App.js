import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "./assets/Profile.JPG";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    addResponseMessage("Welcome to this **awesome** chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

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
        <Container component="container">
          <Box className="App">
            <Widget
              handleNewUserMessage={handleNewUserMessage}
              profileAvatar={logo}
              title="Chat me"
              subtitle="Ask whatever you think"
            />
          </Box>
          <Navbar />
          <About />
          <Work />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
