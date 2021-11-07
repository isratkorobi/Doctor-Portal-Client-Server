import { Button, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, space, time } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  return (
    <>
      <Grid item xs={12} sm={2} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: "bold" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            component="div"
          >
            ({space}) SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ my: 1, py: 1 }}
            color="primary"
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
      date={date}
      booking={booking}
       openBooking={openBooking}
       handleBookingClose={handleBookingClose}>
       
      </BookingModal>
    </>
  );
};

export default Booking;
