import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";
import "../styles/NavbarStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToogle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToogle} sx={{ textAlign: "center" }}>
      <Typography variant="p" sx={{ flexGrow: 1 }}>
        ajeeth.me
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Work</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <Container>
      <AppBar component={"nav"} sx={{ bgcolor: "#F6F7F2", color: "black" }}>
        <Toolbar>
          <Typography variant="p" sx={{ flexGrow: 1 }}>
            ajeeth.me
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Work</Link>
              </li>
            </ul>
          </Box>
          <IconButton sx={{ display: { sm: "none" } }} onClick={ handleDrawerToogle } >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temp"
          open={mobileOpen}
          onClose={handleDrawerToogle}
          sx={{ display: { xs: "block", sm: "none" } }}
          anchor='right'
        >
          {drawer}
        </Drawer>
      </Box>
    </Container>
  );
};

export default Navbar;
