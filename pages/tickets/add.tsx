// pages/tickets/add.tsx
import axios from "axios";
import React from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router"; // Import useRouter
import Layout from "../../components/Layout";
import TicketForm from "../../components/TicketForm";
import { TicketFormFields } from "../../interfaces/Ticket";
import { createTicket } from "../../services/tickets";

const AddTicketPage: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  const onSubmit = async (data: TicketFormFields) => {
    const { title, description, price } = data;
    try {
      const ticket = await createTicket(data);
      router.push("/tickets"); // Redirect to the home page
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <TicketForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AddTicketPage;
