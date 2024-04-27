import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Image } from "../interfaces/Images";

interface ImagesProps {
  images: Image[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" style={{ minHeight: "70vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }} justifyContent="center">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h2">Tickets API</Typography>
        </Grid>
        {images.slice(0, 2).map((image) => (
          <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
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
    </Box>
  );
};

export default Images;