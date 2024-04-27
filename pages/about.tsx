import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Layout from "../components/Layout";
import { Grow, Avatar } from "@mui/material";
import { GitHub, LinkedIn, StarBorder } from "@mui/icons-material";
import AirplaneTicketSharpIcon from "@mui/icons-material/AirplaneTicketSharp";

const AboutPage: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4, textAlign: "center", color: "white", mt: 15 }}>
          <Grow in={checked}>
            <Box>
              <Avatar
                sx={{
                  bgcolor: "transparent",
                  width: 100,
                  height: 100,
                  margin: "auto",
                }}
              >
                <AirplaneTicketSharpIcon sx={{ fontSize: 80, color: "gold" }} />
              </Avatar>
              <Typography variant="h4" component="h1" gutterBottom>
                &emsp;About Us&emsp;
              </Typography>
              <Typography variant="body1" gutterBottom>
                We are a team of passionate developers dedicated to creating the
                best ticketing platform.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Connect with us on our social platforms:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <IconButton
                  component="a"
                  href="https://github.com/matanew1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/matan-bardugo-a2949b216/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grow>
        </Box>
      </Container>
    </Layout>
  );
};

export default AboutPage;
