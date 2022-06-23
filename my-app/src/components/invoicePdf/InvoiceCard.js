import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import themeOptions from "../style/theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const InvoiceCard = (props) => {
  return (
    <ThemeProvider theme={themeOptions}>
      <Box disableRipple sx={{ width: 350 }}>
        <Stack direction="row" spacing={2} sx={{ height: "40px" }}>
          <CardMedia
            component="img"
            height="40"
            width="40"
            image={props.imageId}
            alt="Voidture not Found"
          />

          <Stack direction="column">
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              fontSize={8}
            >
              Price: {props.cost}$
            </Typography>
          </Stack>

          <Typography
            variant="body1"
            color="text.secondary"
            fontWeight="bold"
            fontSize={6}
          >
            {props.model}: {props.title}
          </Typography>

          <Box sx={{ m: 2 }} />

          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
            fontSize={8}
          >
            Item Count: {props.count}
          </Typography>

          <Box sx={{ m: 1 }} />
          <Stack direction="column">
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
              fontSize={8}
            >
              Total Price
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: 8 }}
            >
              {(props.cost - (props.cost * props.discount) / 100) *
                props.count.toFixed(2)}
              $
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{ m: 1 }} />
        <Divider />
      </Box>
    </ThemeProvider>
  );
};
export default InvoiceCard;
