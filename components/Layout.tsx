// src/components/Layout.tsx

import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        margin: 0,
        padding: 0,
        position: "fixed", // Change this line
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      {children}
    </Box>
  );
};

export default Layout;