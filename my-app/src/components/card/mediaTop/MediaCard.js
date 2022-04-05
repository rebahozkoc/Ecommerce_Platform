import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

import furn from "./furn1.jpg";
import furn2 from "./furn1.jpg"
import furn3 from "./furn1.jpg"
import furn4 from "./furn1.jpg"
import furn5 from "./furn1.jpg"
import furn6 from "./furn1.jpg"

const myarr = [furn, furn2, furn3, furn4, furn5, furn6];

export default function MediaCard(props) {
  return (
    <CardMedia
      component="img"
      height="200"
      image={myarr[props.myId]}
      alt="green iguana"
    />
  );
}
