import { Badge, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const OwnTypography = ({ children }) => {
    return <Typography style={{ fontSize: "20px" }}>{children}</Typography>;
  };
  return (
    <Box
      color="primary"
      component="nav"
      sx={{
        padding: 3,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        // border: "2px solid red"
      }}
    >
      <Box>
        <Link to="about">
          <OwnTypography>ajeeth.me</OwnTypography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link>
          <OwnTypography>About</OwnTypography>
        </Link>
        <Link>
          <Badge sx={{ marginLeft: "50px" }} badgeContent={1}>
            <OwnTypography>Work</OwnTypography>
          </Badge>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
