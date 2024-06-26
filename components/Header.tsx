import React, { useState } from "react";
import Link from "next/link";
import {
  Grid,
  Button,
  Box,
  Typography,
  Hidden,
  Drawer,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import AirplaneTicketSharpIcon from "@mui/icons-material/AirplaneTicketSharp";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";

type HeaderProps = {
  handleThemeChange: () => void;
  darkMode: boolean;
};

const Header: React.FC<HeaderProps> = ({ handleThemeChange, darkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box // Add a Box component to style the drawer>
      style={{
        width: 160, // Set the width of the drawer
        height: "100%",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Set a gradient background color
        color: "white", // Set the text color to white
      }}
    >
      <List>
        {["Home", "About", "Tickets", "Tickets/Add"].map((text, index) => (
          <ListItem button key={text} style={{ justifyContent: "center" }}>
            <Link
              href={
                text === "Home"
                  ? "/"
                  : `/${text.toLowerCase().replace(" ", "")}`
              }
              passHref
            >
              <Button
                variant="contained"
                style={{
                  margin: "10px 0", // Add vertical margin to the buttons
                  backgroundColor: "transparent", // Make the buttons transparent
                  boxShadow: "none", // Remove the button shadow
                }}
              >
                {text}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid
      container
      direction="row"
      spacing="15"
      alignItems="center"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        height: "100px",
        margin: 0,
      }}
    >
      <Grid
        lg={3}
        md={4}
        sm={5}
        xs={6}
        item
        container
        sx={{
          marginLeft: "30px",
          marginRight: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <AirplaneTicketSharpIcon
              sx={{
                fontSize: "50px", // Adjust this value as needed
                color: "black",
                boxShadow: "0 0 10px black, 0 0 5px black",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                marginLeft: "20px",
                fontWeight: "bold",
                color: "transparent",
                background: "linear-gradient(to right, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                textShadow: "0px 0px 5px rgba(255, 215, 0, 0.6)",
                WebkitTextStroke: ".7px black", // Add this line
                textDecoration: "none", // Add this line
              }}
            >
              TicketsAPI
            </Typography>
          </Grid>
        </Link>
      </Grid>

      <Grid item gap={3} sx={{ display: "flex", alignItems: "center" }}>
        <Hidden mdDown>
          <Grid item>
            <Link href="/" passHref>
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "gold",
                  boxShadow: "0 0 10px gold",
                  "&:hover": {
                    backgroundColor: "goldenrod",
                    boxShadow:
                      "0 0 10px goldenrod, 0 0 20px goldenrod, 0 0 30px goldenrod, 0 0 40px goldenrod",
                  },
                }}
              >
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/about" passHref>
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "gold",
                  boxShadow: "0 0 10px gold",
                  "&:hover": {
                    backgroundColor: "goldenrod",
                    boxShadow:
                      "0 0 10px goldenrod, 0 0 20px goldenrod, 0 0 30px goldenrod, 0 0 40px goldenrod",
                  },
                }}
              >
                About
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/tickets" passHref>
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "gold",
                  boxShadow: "0 0 10px gold",
                  "&:hover": {
                    backgroundColor: "goldenrod",
                    boxShadow:
                      "0 0 10px goldenrod, 0 0 20px goldenrod, 0 0 30px goldenrod, 0 0 40px goldenrod",
                  },
                }}
              >
                Tickets
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/tickets/add" passHref>
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "gold",
                  boxShadow: "0 0 10px gold",
                  "&:hover": {
                    backgroundColor: "goldenrod",
                    boxShadow:
                      "0 0 10px goldenrod, 0 0 20px goldenrod, 0 0 30px goldenrod, 0 0 40px goldenrod",
                  },
                }}
              >
                Add Ticket
              </Button>
            </Link>
          </Grid>
        </Hidden>
      </Grid>

      <Grid item marginLeft="5px" padding="10px">
        <IconButton
          color="inherit"
          aria-label="toggle dark mode"
          onClick={handleThemeChange} // Add this line
        >
          {darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
        </IconButton>
      </Grid>

      <Grid item marginLeft="1px" padding="10px">
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Grid>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Grid>
  );
};

export default Header;
