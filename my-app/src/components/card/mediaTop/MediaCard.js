import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

import furn from "/Users/gorkemyar/frontend/web/my-app/src/components/image/furn1.jpg";
import furn2 from "/Users/gorkemyar/frontend/web/my-app/src/components/image/furn2.jpg";
import furn3 from "/Users/gorkemyar/frontend/web/my-app/src/components/image/furn3.jpg";
import furn4 from "/Users/gorkemyar/frontend/web/my-app/src/components/image/furn4.jpg";
import furn5 from "/Users/gorkemyar/frontend/web/my-app/src/components/image/furn5.jpg";
import furn6 from "/Users/gorkemyar/frontend/web/my-app/src/components/image/furn6.jpg";

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
