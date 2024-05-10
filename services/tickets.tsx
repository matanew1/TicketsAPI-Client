import axios from "axios";
import { Ticket } from "../interfaces/Ticket";
import { TicketFormFields } from "../interfaces/Ticket";

export const fetchTickets = async (): Promise<Ticket[]> => {
  try {
    const response = await axios.get<Ticket[]>("https://tickets-api-server.vercel.app/tickets");
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
    console.log(ticket);
    const response = await axios.post<Ticket>(
      "https://tickets-api-server.vercel.app/tickets",
      ticket
    );
    return response.data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return null;
  }
};

export const deleteTicket = async (id: string): Promise<void> => {
  try {
    await axios.delete(`https://tickets-api-server.vercel.app/tickets/${id}`);
  } catch (error) {
    console.error("Error deleting ticket:", error);
  }
};
