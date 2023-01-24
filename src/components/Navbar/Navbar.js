import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Badge, Box, Switch, Typography } from "@mui/material";
import { Link } from "react-scroll";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Navbar = ({ settheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleSwitchChange = () => {
    settheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
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
      }}
    >
      <Box>
        <Link to="about" smooth={true} duration={500}>
          <Typography style={{ fontSize: "20px", cursor: "pointer" }}>
            ajeeth.me
          </Typography>
        </Link>
      </Box>
      <Box>
        <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <List>
            <ListItem button>
              <ListItemText>
                <Link to="about" smooth={true} duration={500}>
                  <Typography style={{ fontSize: "20px", cursor: "pointer" }}>
                    About
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <Link to="work" smooth={true} duration={1000}>
                  <Badge badgeContent={1}>
                    <Typography style={{ fontSize: "20px", cursor: "pointer" }}>
                      Work
                    </Typography>
                  </Badge>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <Switch color="secondary" onChange={handleSwitchChange} />
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
