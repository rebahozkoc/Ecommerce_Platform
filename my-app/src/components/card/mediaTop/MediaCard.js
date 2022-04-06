import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

export default function MediaCard(props) {
  return (
    <CardMedia
      component="img"
      height="400"
      image={`furn${props.myId + 1}.jpg`}
      alt="green iguana"
    />
  );
}
