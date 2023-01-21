import { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [email] = useState("hello@ajeeth.me");
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    alert("Email copied to clipboard!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "231px",
        // border: "2px solid black",
        background: "#222222",
        color: "#F8F8F8",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "300" }}>
        <Typography sx={{ fontSize: "25px", marginBottom: "40px" }}>
          ajeeth.me
        </Typography>
        <Typography sx={{ fontSize: "15px", marginBottom: "40px" }}>
          Designed in Figma
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Last updated in Jan 2023
        </Typography>
      </Box>
      <Box sx={{ width: 450 }}>
        <Typography sx={{ fontSize: "28px", marginBottom: "40px" }}>
          Let’s make something together
        </Typography>
        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
          I am a digital product designer specializing in web applications. Feel
          free to send me a message for possible collaborations, new
          connections, or projects. I should get back to you within 24 hours.
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "20px", marginBottom: "20px", cursor: "pointer " }}
        >
          <Link to="about" smooth={true} duration="500ms">
            About
          </Link>
        </Typography>

        <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
          <Link to="work" smooth={true} duration="500ms">
            <Badge sx={{ cursor: "pointer " }} badgeContent={1}>
              <Typography>Work</Typography>
            </Badge>
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "20px", cursor: "pointer" }}>
          <Link>
            <IconButton>
              <Typography onClick={handleClick} fontSize="20px" color="#F8F8F8">
                Contact
              </Typography>
              <ContentCopyOutlinedIcon
                onClick={handleClick}
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "15px",
                  margin: "0 0 20px 5px",
                }}
              />
            </IconButton>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
