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
import { useState, useEffect } from "react";
import { getData } from "../../recoils/getterFunctions";

export default function AddressListForm(props) {
  //const addressList = props.addressList;
  const [isLoaded, setLoaded] = useState(false);

  const [addressList, setAddressList] = useState([]);
  useEffect(() => {
    getData("http://164.92.208.145/api/v1/user/credit").then((res) => {
      res.data.push({
        name: "Add New Address",
      });

      //console.log(res.data);
      setAddressList(res.data);
      setLoaded(true);
    });
  }, []);
  //console.log(addressList);
  const [value, setValue] = React.useState(0);
  const [newAddress, setNewAddress] = React.useState(false);

  const handleChange = (event) => {
    //console.log("handleChange");
    //console.log(event.target.value);
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
            defaultValue={0}
          >
            {addressList.map((address, index) => {
              //console.log(index);
              if (address["name"] != "Add New Address")
                return (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={
                      <AddressListGetOld
                        title={address["payment_method"]}
                        description={address["card_number"]}
                        postal_code={address["card_name"]}
                        province={address["CW"]}
                        city={address["expiry_date"]}
                        id={address["id"]}
                        link={"http://164.92.208.145/api/v1/user/credit/"}
                      />
                    }
                  />
                );
            })}
          </RadioGroup>
        </FormControl>
        <Box sx={{ ml: 4 }}>
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

      <Box sx={{ mt: 20, ml: 5, mr: 5 }}>
        <Typography color="text.secondary">
          The payment infrastructure for Voidture Inc. is provided by
          MasterCard.
        </Typography>
        <img src="/masterpass.png" width={300} alt="Mastercard" />
      </Box>
    </React.Fragment>
  );
}
