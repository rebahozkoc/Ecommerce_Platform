import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import Column from "./Column";
import DiscountItem from "./DiscountItem";

const columnItems = [
  "Coach",
  "Sofa",
  "Chair",
  "Pillow",
  "Bookshelf",
  "TV Stand",
];

export default function DropDownMenu(props) {
  return (
    <Paper
      color="red"
      square={true}
      sx={{ position: "fixed", backgroundColor: "#F6F6F6", width: "100%" }}
      style={props.style}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="row"
          justifyContent="space-between"
          divider={<Divider orientation="vertical" />}
        >
          <Column columnItems={columnItems}></Column>
          <Column columnItems={columnItems}></Column>
          <Column columnItems={columnItems}></Column>
        </Stack>

        <DiscountItem></DiscountItem>
        <DiscountItem></DiscountItem>
      </Stack>
    </Paper>
  );
}
