// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../store/darkModeSlice';

const Layout: React.FC = ({ children }) => {
  const darkMode = useSelector((state) => state.darkMode.value); // Get the darkMode value from the store
  const dispatch = useDispatch();  // Get the dispatch function from the store

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333" : "linear-gradient(to right bottom, #f4d03f, #85c1e9)",
      },
    },
  });
  const bg = darkMode ? "#333" : "linear-gradient(to right bottom, #f4d03f, #85c1e9)";

  const handleThemeChange = () => {
    dispatch(toggle()); // Dispatch the toggle action
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: bg,
          margin: 0,
          padding: 0,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Header handleThemeChange={handleThemeChange} darkMode={darkMode} />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;