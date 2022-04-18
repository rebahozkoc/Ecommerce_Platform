import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  Grid,
  Card,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
const summaryInfo = {"Cost of cart": "100.00", "Shipping": "16.00", "Tax (18% VAT)": "18.00", "Total": "0.00"};

const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div" align="center">
        Order Summary
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to Payment</Button>
    </CardActions>
  </React.Fragment>
);

export default function AddressListSummary() {
  const totalCost = 0;

  return (
    <Grid item key={2} xs={3}>
              <Box
                sx={{
                  backgroundColor: "white",
                  overflow: "auto",
                }}
              >
                <Card sx={{ backgroundColor: "#EAECEC", borderRadius: 0  }}>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: 20 }}
                  >
                    Order Summary
                  </Typography>
                </Card>
                <Card elevation={0} sx={{ padding: (2, 2, 2, 2), borderRadius: 0}}>
                  <Stack direction="row">
                    <Typography
                      align="left"
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: 16 }}
                    >
                      Total Product
                    </Typography>
                    <Box sx={{ m: 2 }} />
                    <Typography
                      align="right"
                      variant="body1"
                      color="text.secondary"
                      fontWeight="bold"
                      sx={{ fontSize: 16 }}
                    >
                      {totalCost}$
                    </Typography>
                  </Stack>
                  <Box sx={{ m: 1 }} />
                  <Stack direction="row">
                    <Typography
                      align="left"
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: 16 }}
                    >
                      Delivery Fee
                    </Typography>
                    <Box sx={{ m: 2 }} />
                    <Typography
                      align="right"
                      variant="body1"
                      color="text.secondary"
                      fontWeight="bold"
                      sx={{ fontSize: 16 }}
                    >
                      10$
                    </Typography>
                  </Stack>
                  <Divider />
                  <Box sx={{ m: 1 }} />
                  <Stack direction="row">
                    <Typography
                      align="left"
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: 16 }}
                    >
                      Total
                    </Typography>
                    <Box sx={{ m: 2 }} />
                    <Typography
                      align="right"
                      variant="body1"
                      color="text.secondary"
                      fontWeight="bold"
                      sx={{ fontSize: 16 }}
                    >
                      {totalCost + 10}$
                    </Typography>
                  </Stack>
                </Card>
                <Stack justifyContent="center" alignItems="center">
                  <Link
                    to="/Dummy"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Button
                      
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff6600",
                        display: "block",
                        padding: (8, 1, 8, 1),
                        mb: 2,
                        justify: "center",
                      }}
                    >
                      <Typography sx={{ color: "black"}}>
                        Confirm Card
                      </Typography>
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Grid>
  );
}