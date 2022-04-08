import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import themeOptions from "../../../theme";
import { ThemeProvider } from "@emotion/react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CategoryCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={themeOptions}>
      <Card sx={{ maxWidth: 400 }}>
        <Link to="/Dummy" underline="none">
          <CardMedia
            component="img"
            height="194"
            image={`furn3.jpg`}
            alt="Voidture not Found"
          />
        </Link>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This place will consist the information about category.
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
export default CategoryCard;
