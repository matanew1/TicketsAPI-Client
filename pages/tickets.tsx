import React from "react";
import { GetStaticProps } from "next";
import { fetchTickets } from "../services/tickets";
import TicketList from "../components/TicketList";
import Layout from "../components/Layout";
import { Ticket } from "../interfaces/Ticket";
import { Button, Typography } from "@mui/material"; // Import Button from Material-UI

interface TicketProps {
  tickets: Ticket[];
}

export const getStaticProps: GetStaticProps<TicketProps> = async () => {
  const tickets = await fetchTickets();
  return {
    props: {
      tickets,
    },
  };
};

const TicketsPage: React.FC<TicketProps> = ({ tickets }) => {
  return (
    <Layout>
      {tickets.length === 0 ? (
        <Typography variant="h3" gutterBottom component="div" style={{ textAlign: "center", marginTop: "50px" }}>
          No tickets found
        </Typography>
      ) : (
        <TicketList tickets={tickets} />
      )}
    </Layout>
  );
};

export default TicketsPage;
