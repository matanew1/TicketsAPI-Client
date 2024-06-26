import { NextPage } from "next";
import GetServerSideProps from "next/link";
import PaidIcon from "@mui/icons-material/Paid";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { Grid } from "@mui/material";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Divider,
} from "@mui/material";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { Ticket } from "../interfaces/Ticket";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PayPalIcon from "@mui/icons-material/Payment";
import IconButton from "@mui/material/IconButton";

interface TicketDetailsProps {
  ticket: Ticket;
}

const TicketDetail: NextPage<TicketDetailsProps> = ({ ticket }) => {
  const handleCreditCardPayment = () => {
    alert("Credit Card Payment");
  };

  const handlePaypalPayment = () => {
    alert("Paypal Payment");
  };

  const handleCashPayment = () => {
    alert("Cash Payment");
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={11} sm={8} md={8} lg={12} xl={12}>
        <Card
          style={{
            maxWidth: "600px",
            margin: "auto",
            marginTop: "20px",
            border: "1px solid #000",
            borderRadius: "10px",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            padding: "20px",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocalActivityIcon style={{ fontSize: "70px", color: "gold" }} />
            <Typography
              variant="h5"
              component="div"
              style={{ marginLeft: "30px" }}
            >
              Ticket Details - #{ticket.id}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Ticket Date Event - {ticket.date}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CardContent>
            <Typography variant="h5" component="div">
              Title: {ticket.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Description: {ticket.description}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price: ${ticket.price}
            </Typography>
          </CardContent>
          <Divider style={{ margin: "20px 0" }} />
          <CardActions>
            <Grid container alignItems="center">
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Typography variant="h6" style={{ marginRight: "10px" }}>
                  Buy with:
                </Typography>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <IconButton
                  color="primary"
                  onClick={handleCreditCardPayment}
                  style={{ padding: "0px" }}
                >
                  <Typography variant="body1">Credit</Typography>
                  <CreditCardIcon />
                </IconButton>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <IconButton
                  color="primary"
                  onClick={handleCashPayment}
                  style={{ padding: "0px" }}
                >
                  <Typography variant="body1">Cash</Typography>
                  <PaidIcon />
                </IconButton>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <IconButton
                  color="primary"
                  onClick={handlePaypalPayment}
                  style={{ padding: "0px" }}
                >
                  <Typography variant="body1">Paypal</Typography>
                  <PayPalIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
          <Typography
            variant="body2"
            color="primary"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <IconButton color="primary">
              <AirplaneTicketIcon />
            </IconButton>
            Bought from Ticket API
            <IconButton color="primary">
              <VerifiedUserIcon />
            </IconButton>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TicketDetail;
