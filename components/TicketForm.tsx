// components/TicketForm.tsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Grid, Slider, Typography } from "@mui/material";
import { TicketFormFields } from "../interfaces/Ticket";

interface TicketFormProps {
    onSubmit: (data: TicketFormFields) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, setValue } = useForm<TicketFormFields>();
    const [price, setPrice] = useState(0);

    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue("price", newValue as number);
        setPrice(newValue as number);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={8} sm={8} md={8} style={{ textAlign: "center", marginTop: 50 }}>
                    <Typography variant="h4" color="white">Add a new ticket</Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <TextField
                        {...register("title")}
                        label="Title"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <TextField
                        {...register("description")}
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
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
                    />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Button type="submit" variant="contained" color="warning">
                        Add Ticket
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default TicketForm;