// src/components/Header.tsx

import React from "react";
import Link from "next/link";
import { Grid, Button, Typography } from "@mui/material";
import AirplaneTicketSharpIcon from "@mui/icons-material/AirplaneTicketSharp";

const Header: React.FC = () => {
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
        item
        sx={{
          marginLeft: "20px",
          marginRight: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AirplaneTicketSharpIcon
              sx={{
                fontSize: "60px", // Adjust this value as needed
                color: "gold",
                boxShadow: "0 0 10px gold, 0 0 5px gold",
              }}
            />

            <Typography
              variant="h4"
              sx={{
                marginLeft: "20px",
                fontFamily: "Cursive, sans-serif", // Adjust this value as needed
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
          </div>
        </Link>
      </Grid>

      <Grid item>
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              backgroundColor: "rgba(255, 215, 0, 0.7)", // Gold with 70% opacity
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(255, 215, 0, 0.9)", // Darker gold when hovered
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
            variant="contained"
            sx={{
              fontSize: "20px",
              backgroundColor: "rgba(255, 215, 0, 0.7)", // Gold with 70% opacity
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(255, 215, 0, 0.9)", // Darker gold when hovered
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
            variant="contained"
            sx={{
              fontSize: "20px",
              backgroundColor: "rgba(255, 215, 0, 0.7)", // Gold with 70% opacity
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(255, 215, 0, 0.9)", // Darker gold when hovered
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
            variant="contained"
            sx={{
              fontSize: "20px",
              backgroundColor: "rgba(255, 215, 0, 0.7)", // Gold with 70% opacity
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(255, 215, 0, 0.9)", // Darker gold when hovered
              },
            }}
          >
            Add Ticket
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
