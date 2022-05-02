import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import AddressListAddNew from "./addressListAddNew";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddressListGetOld from "./addressListGetOld";

export default function AddressListForm(props) {
  //const addressList = props.addressList;
  const addressList = [
    ["Address List", "This is a description of the address list"],
    ["Home", "Fakülteler Mah, Oba Sk. No:1, 06590 Çankaya/Ankara"],
    ["Dormitory", "Sabanci University, 34956 Tuzla, Istanbul, Turkey"],
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
            title={"Add New Address"}
            description={"Create a new address..."}
          />
        </Box>
      </Box>
      {newAddress ? <AddressListAddNew /> : <div> </div>}
    </React.Fragment>
  );
}
