import { Grid, Container, Card, Box } from "@mui/material";
import CategoryCard from "./functions/CategoryCard";
const CategoryCardHandler = (props) => {
  const cards = props.item;
  return (
    <>
      <h2 className="h2Center">Our Furn</h2>
      <Container maxWidth="lg" height="400">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <CategoryCard></CategoryCard>
            </Grid>
          ))}
          ;
        </Grid>
      </Container>
    </>
  );
};
export default CategoryCardHandler;
