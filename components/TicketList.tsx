// src/components/TicketList.tsx
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router"; // Import useRouter
import IconButton from "@mui/material/IconButton";
import {
  Table,
  TableBody,
  Box,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { Ticket } from "../interfaces/Ticket";
import { deleteTicket } from "../services/tickets";

interface TicketProps {
  tickets: Ticket[];
}

const TicketList: React.FC<TicketProps> = ({ tickets }) => {
  const router = useRouter(); // Initialize useRouter

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        Tickets List
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          margin: "auto",
          width: "90%",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", padding: 2 }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                Title
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", padding: 2 }}>
                Description
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
              <TableRow key={ticket.id}>
                <TableCell sx={{ padding: 2 }}>{ticket.id}</TableCell>
                <TableCell sx={{ padding: 2 }}>{ticket.title}</TableCell>
                <TableCell sx={{ padding: 2 }}>{ticket.description}</TableCell>
                <TableCell sx={{ padding: 2 }}>{ticket.price}</TableCell>
                <TableCell sx={{ padding: 2 }}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteTicket(ticket.id.toString());
                      router.push("/tickets");
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TicketList;
