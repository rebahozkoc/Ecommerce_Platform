import * as React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddressListGetOld from "../addressList/addressListGetOld";
import PaymentAddNew from "./paymentAddNew";
export default function AddressListForm(props) {
  //const addressList = props.addressList;
  const addressList = [
    ["Payment Method", "This is a description of the payment method"],
    ["Akbank", "Rebah Özkoç 1111 1111 2222 2222 *** **/****"],
    ["Garanti BBVA", "Rebah Özkoç 1111 1111 2222 2222 *** **/****"],
  ];
  const [value, setValue] = React.useState("01");
  const [newAddress, setNewAddress] = React.useState(false);

  const handleChange = (event) => {
    console.log("handleChange");
    console.log(event.target.value);
    setValue(event.target.value);
    if (event.target.value === "new") {
      setNewAddress(true);
    } else {
      setNewAddress(false);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ maxWidth: 750, pl: 4, pr: 4, pb: 4, pt: 3 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {addressList.map((address, index) => {
              console.log(index);
              return (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={
                    <AddressListGetOld
                      title={address[0]}
                      description={address[1]}
                    />
                  }
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <Box sx={{ml:4}}>
          <AddressListGetOld
            onClick={() => {
              setNewAddress(!newAddress);
            }}
            isNew={true}
            title={"Add New Payment Method"}
            description={"Create a new payment method..."}
          />
        </Box>
      </Box>
      {newAddress ? <PaymentAddNew /> : <div> </div>}

      <Box sx={{mt:20, ml:5, mr:5}}>
          <Typography color="text.secondary">The payment infrastructure for Voidture Inc. is provided by MasterCard.</Typography>
          <img src="/masterpass.png" width={300} alt="Mastercard" />
          </Box> 
    </React.Fragment>
  );
}
