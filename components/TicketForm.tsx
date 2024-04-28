// components/TicketForm.tsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Grid, Slider, Typography } from "@mui/material";
import { TicketFormFields } from "../interfaces/Ticket";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

interface TicketFormProps {
  onSubmit: (data: TicketFormFields) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm<TicketFormFields>();
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [charCountDes, setCharCountDes] = useState(0);
  const [charCountTi, setCharCountTi] = useState(0);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue("price", newValue as number);
    setPrice(newValue as number);
  };

  const handleAmountSliderChange = (
    event: any,
    newValue: number | number[]
  ) => {
    setValue("amount", newValue as number);
    setAmount(newValue as number);
  };

  const handleDateChange = (newValue: any) => {
    setValue("date", newValue);
    setSelectedDate(newValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        item
        justifyContent="center"
        sx={{ 
          overflowY: "auto", 
          height: "85vh",
          '&::-webkit-scrollbar': {
            width: '9px',
            borderRadius: '85px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '85px',
            margin: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#808',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          style={{ textAlign: "center", marginTop: 50, marginBottom: 20 }}
        >
          <Typography variant="h5" color="white">
            Add a new ticket
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
        <Typography variant="caption">
            {70 - charCountTi} characters remaining
          </Typography>
          <TextField
            {...register("title")}
            label="Title"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 70 }}
            onChange={(e) => {
              setCharCountTi(e.target.value.length);
            }}
            required
          />
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Typography variant="caption">
            {255 - charCountDes} characters remaining
          </Typography>

          <TextField
            {...register("description")}
            label="Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            required
            inputProps={{ maxLength: 255 }}
            onChange={(e) => {
              setCharCountDes(e.target.value.length);
            }}
          />
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Typography id="price-slider" gutterBottom>
            Price: {price}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Slider
            {...register("price")}
            aria-labelledby="price-slider"
            step={1}
            min={0}
            max={300}
            defaultValue={price}
            onChange={handleSliderChange}
            required
          />
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Typography id="amount-slider" gutterBottom>
            Amount: {amount}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Slider
            {...register("price")}
            aria-labelledby="price-slider"
            step={1}
            min={0}
            max={1000}
            defaultValue={price}
            onChange={handleAmountSliderChange}
          />
        </Grid>
        <Grid item xs={8} sm={8} md={8} style={{ marginBottom: 10 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              {...register("date")}
              label="Date Event"
              value={selectedDate}
              onChange={(newValue) => {
                handleDateChange(newValue);
              }}
              minDate={dayjs().startOf("day")}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8} sm={8} md={8} style={{ marginBottom: 40 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={selectedDate === null || price === 0 || amount === 0 || charCountTi > 70 || charCountDes > 255}
          >
            Add Ticket
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TicketForm;
