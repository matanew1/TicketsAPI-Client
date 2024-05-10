import { NextPage } from "next";
import { GetServerSideProps } from "next";
import axios from "axios"; // Import axios
import TicketDetail from "../../components/TicketDetail"; // Import the TicketDetails component
import Layout from "../../components/Layout"; // Import the Layout component

// Define a type for the ticket details

interface TicketDetailsProps {
  ticket: {
    id: number;
    title: string;
    description: string;
    price: number;
    amount: number;
    date: string;
  };
}

// Define a function that will fetch the ticket details
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const { data: ticket } = await axios.get(
    `http://localhost:4000/tickets/${id}`
  );
  return { props: { ticket } };
};

const TicketDetails: NextPage = ({ ticket }: TicketDetailsProps) => {
  return (
    <Layout>
      <TicketDetail ticket={ticket} />
    </Layout>
  );
};

export default TicketDetails;
