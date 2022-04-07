import { Box, Grid, Container } from "@mui/material";
import CardHalf from "./functions/CardHalf";
import CardItem from "./functions/CardItem";
const CardHalfTogether = () => {
  return (
    <Container maxWidth="lg" height="400">
      <Box sx={{ m: 2 }} />
      <Grid container spacing={2}>
        <Grid item key={1} xs={6}>
          <CardHalf way="left"></CardHalf>
        </Grid>
        <Grid item key={2} xs={6}>
          <Grid container spacing={2}>
            <Grid item key={3} xs={6}>
              <CardItem></CardItem>
            </Grid>
            <Grid item key={4} xs={6}>
              <CardItem></CardItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ m: 2 }} />
    </Container>
  );
};
export default CardHalfTogether;
