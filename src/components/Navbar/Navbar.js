import { Badge, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Box
    color= 'primary'
      component="nav"
      sx={{
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid red",
      }}
    >
      <Box>
        <Link to="about">
          <Typography>ajeeth.me</Typography>
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
          <Typography>About</Typography>
        </Link>
        <Link>
          <Badge sx={{ marginLeft: "50px" }} badgeContent={1}>
            Work
          </Badge>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
