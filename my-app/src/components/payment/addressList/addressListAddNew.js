import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';
import themeOptions from '../../theme';

const addressListAddNew = (props) => {
  const data = props.data;
    return (
        <React.Fragment>
        <Box sx={{maxWidth:750, p:4}}>
      
      <TextField
            required
            id="addressName"
            name="addressName"
            label="Address Name"
            defaultValue= {data ? data["title"]: ""}
            fullWidth
            autoComplete="address-name"
            variant="standard"
          />
          <br></br>
          <br>
          </br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            defaultValue= {data ? data["firstName"]: ""}

            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            defaultValue= {data ? data["lastName"]: ""}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            defaultValue= {data ? data["description"]: ""}

            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            defaultValue= {data ? data["description"]: ""}

            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
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
    )

};

export default addressListAddNew;