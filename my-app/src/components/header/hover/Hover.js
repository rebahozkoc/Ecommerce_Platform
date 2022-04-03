import React from "react";
import List from "../List";
import { ButtonGroup, Button } from "@mui/material";

export default function Hover(props) {
  const [over, setOver] = React.useState(false);

  let buttonstyle = {
    backgroundColor: "",
  };
  const cate = props.lis;

  if (over) {
    buttonstyle.backgroundColor = "orange";
    console.log(cate);
  } else {
    buttonstyle.backgroundColor = "";
  }

  return (
    <div>
      <Button
        style={{ backgroundColor: "red" }}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        {props.chi}
      </Button>
      {over && <List categories={cate}></List>}
    </div>
  );
}
