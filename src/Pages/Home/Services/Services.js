import React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"
import Typography from "@mui/material/Typography";

const services=[
  {
    name: 'Flouride Treatment',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: cavity
  },
  {
    name: 'Whitening Treatment',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: whitening
  }
]

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ color: 'text.secondary', mt:5, mb:2, fontWeight: 'bold'}} variant="h6" component="div">
              OUR SERVICES
      </Typography>
      <Typography sx={{ fontWeight: '600', mb:5, color: '#1976d2'}} variant="h4" component="div">
              SERVICES WE PROVIDE
      </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map(service =><Service
                key={service.name}
                service={service}
              ></Service>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
