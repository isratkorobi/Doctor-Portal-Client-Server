import React from "react";
import chair from "../../../images/chair.png";
import BannerBg from "../../../images/bg.png";
import { Button, Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
  background: `url(${BannerBg})`,
};
const verticalCenter = {
  display: "flex",
  height: 400,
  alignItems: "center",
  justifyContent: "space-around",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 14, fontWeight: 300, color: "gray" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil
              aspernatur velit illum enim incident doloremque vitea imnedit at
              accusantium tenetur.
            </Typography>
            <Button variant="contained" color="primary">
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <img style={{ width: "450px" }} src={chair} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
