import { Grid, Container, Card, Box, Typography, Stack } from "@mui/material";
import SortDropDown from "../../search/sortDropDown";
import CardItem from "./functions/CardItem";
const CardItemHandler = (props) => {
  const cards2 = props.item;
  return (
    <div>
            <Typography variant="h4" style={{ textAlign: "center" }} sx={{ mb: 2, mt:4}}>
        {props.title}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems ="center">
        <div></div>

      
      </Stack>
      <Container maxWidth="lg" height="400">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
          <SortDropDown></SortDropDown>
          </Grid>

          {cards2.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <CardItem
                imageId="/furn3.jpg"
                cost="1500$"
                title="item title"
                productId={card}
              ></CardItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default CardItemHandler;
