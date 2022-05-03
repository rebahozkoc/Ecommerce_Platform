import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import themeOptions from '../../theme';
import { Button } from '@mui/material';

export default function PaymentAddNew(props) {
    const data = props.data;

  return (
    <React.Fragment>
      <Box sx={{maxWidth:750, p:4}}>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <TextField
            required
            id="paymentName"
            label="Payment Method Name"
            defaultValue= {data ? data["title"]: ""}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            defaultValue= {data ? data["name"]: ""}

            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            defaultValue= {data ? data["cardNumber"]: ""}

            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            defaultValue= {data ? data["expireDate"]: ""}

            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            defaultValue= {data ? data["cvv"]: ""}

            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
                 
        </Grid>
        <Grid item xs={12}>
        <Button sx={{bgcolor:themeOptions.palette.primary.light}}>
          <Typography variant="button" sx={{color: themeOptions.palette.black.main}}>
            Save
          </Typography>
        </Button>
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
  );
}
