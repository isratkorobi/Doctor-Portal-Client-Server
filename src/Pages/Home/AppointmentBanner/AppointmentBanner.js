import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(89, 86, 106, .9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
        >
          <img
            style={{ width: 400, marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center",textAlign: "left"}}>
          <Box>
            <Typography
              variant="h6"
              sx={{mb:3}}
              style={{ color: "#30D4D9" }}
              component="div"
            >
              Appointment
            </Typography>
            <Typography variant="h4" style={{ color: "white" }} component="div">
              Make An Appointment Today
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "white", fontSize: 14, fontWeight: 400 }}
              component="div"
              sx={{my:3}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus nam nostrum aspernatur ullam quaerat, fugiat quos. Fugit,
              modi perspiciatis.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
