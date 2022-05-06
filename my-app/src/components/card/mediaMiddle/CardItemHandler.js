import { Grid, Container, Card, Box } from "@mui/material";
import CardItem from "./functions/CardItem";
const CardItemHandler = (props) => {
  const cards2 = props.item;
  return (
    <>
      <h2 className="h2Center">{props.title}</h2>
      <Container maxWidth="lg" height="400">
        <Grid container spacing={4}>
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
    </>
  );
};
export default CardItemHandler;
