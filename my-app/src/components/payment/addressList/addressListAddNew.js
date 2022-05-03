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
            id="name"
            name="name"
            label="Your Name"
            defaultValue= {data ? data["name"]: ""}

            fullWidth
            autoComplete="full-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            defaultValue= {data ? data["phoneNumber"]: ""}

            fullWidth
            autoComplete="full-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            defaultValue= {data ? data["description"]: ""}
            minRows={2}
            fullWidth
            multiline
            autoComplete="shipping address-line1"
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
            defaultValue= {data ? data["city"]: ""}
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            defaultValue= {data ? data["province"]: ""}
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
            defaultValue= {data ? data["zip"]: ""}
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
            defaultValue= {data ? data["country"]: ""}
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