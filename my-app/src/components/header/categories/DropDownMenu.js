import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Box, Stack } from "@mui/material";
import Column from "./Column";
import DiscountItem from "./DiscountItem";

export default function DropDownMenu(props) {
  console.log(props.sub);
  return (
    <Box
      bgcolor="#EBEBEB"
      sx={{ zIndex: "1090", width: "100%", display: "block" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ pt: 4, pb: 4, pl: 2, pr: 2 }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          divider={<Divider orientation="vertical" />}
        >
          <Column columnItems={props.sub}></Column>
        </Stack>
        <Box sx={{ width: 40 }}></Box>
        <Stack direction="row" justifyContent="flex-end">
          <DiscountItem img={props.img}></DiscountItem>
        </Stack>
      </Stack>
    </Box>
  );
}
