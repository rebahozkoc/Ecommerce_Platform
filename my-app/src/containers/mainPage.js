import * as React from "react";
import ShoppingCard from "./card/ShoppingCard";
import { Link } from "react-router-dom";
import themeOptions from "./theme";
import { useTheme } from "@mui/material/styles";

import PrimarySearchAppBar from "../components/AppBar";
import { dividerClasses } from "@mui/material";

const mainPage = () => {
  const [isCard, setIsCard] = React.useState(false);

  const openCard = () => {
    setIsCard(true);
  };

  const closeCard = () => {
    setIsCard(false);
  };

  return <div> a</div>;
};
export default mainPage;
