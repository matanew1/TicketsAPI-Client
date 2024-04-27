import axios from "axios";
import { Ticket } from "../interfaces/Ticket";
import { TicketFormFields } from "../interfaces/Ticket";

export const fetchTickets = async (): Promise<Ticket[]> => {
  try {
    const response = await axios.get<Ticket[]>("http://localhost:4000/tickets");
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};

export const createTicket = async (
  ticket: TicketFormFields
): Promise<Ticket> => {
  try {
    const response = await axios.post<Ticket>(
      "http://localhost:4000/tickets",
      ticket
    );
    return response.data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return null;
  }
};

export const deleteTicket = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:4000/tickets/${id}`);
  } catch (error) {
    console.error("Error deleting ticket:", error);
  }
};
