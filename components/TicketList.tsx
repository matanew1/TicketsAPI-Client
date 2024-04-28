// src/components/TicketList.tsx
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router"; // Import useRouter
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search"; // Import SearchIcon
import { useState } from "react"; // Add this line
import {
  Table,
  TableBody,
  Box,
  TextField,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Ticket } from "../interfaces/Ticket";
import { deleteTicket } from "../services/tickets";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";

interface TicketProps {
  tickets: Ticket[];
}

const TicketList: React.FC<TicketProps> = ({ tickets }) => {
  const router = useRouter(); // Initialize useRouter
  const [search, setSearch] = useState(""); // Add this line

  // Define a styled TableRow with a hover effect
  const StyledTableRow = styled(TableRow)({
    cursor: "pointer",
    transition: "1.3s", // Optional: Add transition for smooth blur effect
    "&:hover": {
      backgroundColor: "purple",
    },
  });

  const handleRowClick = (id: string) => {
    router.push(`/tickets/${id}`);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  tickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ marginTop: 2.5 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#3f51b5", // change this to your preferred color
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Tickets List
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <Grid container justifyContent="center" gap={1}>
          <Grid item xs={11} md={10} lg={5}>
            <Card
              sx={{
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                marginBottom: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  component="div"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InfoIcon color="primary" style={{ marginRight: "10px" }} />
                  Click on a ticket to choose it for buying. Click on the delete
                  icon to remove a ticket.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={11} md={10} lg={4}>
            <Card
              sx={{
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Search Ticket By Title:</Typography>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
                sx={{ width: "50%", margin: "10px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12.5} md={12}>
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                margin: "auto",
                marginTop: "20px",
                width: "90%",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box
                sx={{
                  maxHeight: { xs: "25vh", lg: "50vh", md: "40vh", sm: "40vh" },
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: "10px",
                    height: "10px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#f2f1f1",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#405",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#905",
                  },
                }}
              >
                <Table sx={{ minWidth: 500 }} stickyHeader>
                  <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                        ID
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                        Title
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                        Description
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                        Amount
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                        Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                        Price
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 1 }}>
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tickets.map((ticket) => (
                      <StyledTableRow
                        key={ticket.id}
                        onClick={() => handleRowClick(ticket.id.toString())}
                        style={{ cursor: "pointer" }}
                      >
                        <TableCell sx={{ padding: 3 }}>{ticket.id}</TableCell>
                        <TableCell sx={{ padding: 3 }}>
                          {ticket.title}
                        </TableCell>
                        <TableCell sx={{ padding: 3 }}>
                          {ticket.description}
                        </TableCell>
                        <TableCell sx={{ padding: 3 }}>
                          {ticket.amount}
                        </TableCell>
                        <TableCell sx={{ padding: 3 }}>{ticket.date}</TableCell>
                        <TableCell sx={{ padding: 3 }}>
                          ${ticket.price}
                        </TableCell>
                        <TableCell sx={{ padding: 3 }}>
                          <IconButton
                            aria-label="delete"
                            onClick={(event) => {
                              event.stopPropagation(); // Stop the click event from propagating to the row
                              deleteTicket(ticket.id.toString());
                              router.push("/tickets");
                            }}
                          >
                            <DeleteIcon color="error" />
                          </IconButton>
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TicketList;
