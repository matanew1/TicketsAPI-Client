// src/components/Layout.tsx

import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        margin: 0, // Add this line
        padding: 0, // Add this line
        position: "absolute", // Add this line
        top: 0, // Add this line
        left: 0, // Add this line
        width: "100%", // Add this line
        height: "100%", // Add this line
      }}
    >
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
