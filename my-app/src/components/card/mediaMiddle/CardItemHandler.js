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
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <CardItem
                imageId={card.photos[0] != null ? card.photos[0].photo_url : ""}
                cost={`${card.price}\$`}
                title={card.title}
                productId={card.id}
              ></CardItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default CardItemHandler;
