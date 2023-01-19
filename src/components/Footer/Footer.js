import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "231px",
        border: "2px solid black",
      }}
    >
      <Box>
        <Typography>ajeeth.me</Typography>
        <Typography>Designed in Figma</Typography>
        <Typography>Last updated in Jan 2023</Typography>
      </Box>
      <Box sx={{ width: 450 }}>
        <Typography>Let’s make something together</Typography>
        <Typography>
          I am a digital product designer specializing in web applications. Feel
          free to send me a message for possible collaborations, new
          connections, or projects. I should get back to you within 24 hours.
        </Typography>
      </Box>
      <Box>
        <Typography>About</Typography>
        <Typography>Work</Typography>
        <Typography>Contact</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
