import { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Badge, Box, IconButton, makeStyles, Typography } from "@mui/material";
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
        position: "relative",
        justifyContent: "space-around",
        padding: { xs: "20px", sm: "30px" },
        flexWrap: "wrap",
        height: "250px",
        // border: "4px solid red",
        background: "#222222",
        color: "#F8F8F8",
        "@media (max-width: 768px)": {
          width: "100%",
          flexWrap: "wrap",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "40px",
          width: { xs: "70px", sm: "150px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "25px" },
            marginBottom: { xs: "15px", sm: "40px" },
          }}
        >
          ajeeth.me
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "15px" },
            marginBottom: { xs: "15px", sm: "40px" },
          }}
        >
          Designed in Figma
        </Typography>
        <Typography sx={{ fontSize: { xs: "10px", sm: "15px" } }}>
          Last updated in Jan 2023
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          flexWrap: "wrap",
          height: "max-content",
          top: "40px",
          width: { xs: "200px", sm: "600px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "9px", sm: "35px" },
            marginBottom: { xs: "15px", sm: "40px" },
          }}
        >
          Let’s make something together
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "8px", sm: "15px" }, fontWeight: "500" }}
        >
          I am a digital product designer specializing in web applications. Feel
          free to send me a message for possible collaborations, new
          connections, or projects. I should get back to you within 24 hours.
        </Typography>
      </Box>
      <Box sx={{ position: "relative", top: "40px" }}>
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "20px" },
            marginBottom: { xs: "8px", sm: "20px" },
            cursor: "pointer ",
          }}
        >
          <Link to="about" smooth={true} duration="1000ms">
            About
          </Link>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "20px" },
            marginBottom: { xs: "8px", sm: "20px" },
          }}
        >
          <Link to="work" smooth={true} duration="800ms">
            <Badge sx={{ cursor: "pointer " }} badgeContent={1}>
              <Typography>Work</Typography>
            </Badge>
          </Link>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "15px", sm: "20px" }, cursor: "pointer" }}
        >
          <Link>
            <Typography
              onClick={handleClick}
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              color="#F8F8F8"
            >
              Contact
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
