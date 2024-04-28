import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Image } from "../interfaces/Images";

interface ImagesProps {
  images: Image[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "70vh" }}
    >
      <Grid
        container
        gap={2}
        style={{ padding: "1.5rem" }}
        justifyContent="center"
      >
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h2">Tickets API</Typography>
        </Grid>
        <Grid
          item
          display="flex"
          overflow="auto"
          height="70vh"
          margin="auto"
          padding="2rem"
          sx={{
            boxShadow: "0 0 10px #000",
            borderRadius: "20px",
            maxWidth: "95%",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 5px grey",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#030",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#905",
            },
          }}
        >
          <Grid container spacing={2}>
            {images.slice(0, 10).map((image) => (
              <Grid key={image.id} item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{ borderRadius: "10px", boxShadow: "0 0 10px #000", marginBottom: "2rem" }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={image.url}
                    alt={image.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {image.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Images;
