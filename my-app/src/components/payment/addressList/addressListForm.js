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
import { useState, useEffect } from "react";
import { getData } from "../../recoils/getterFunctions";

export default function AddressListForm(props) {
  //const addressList = props.addressList;
  const [isLoaded, setLoaded] = useState(false);

  const [addressList, setAddressList] = useState([]);
  useEffect(() => {
    getData("http://164.92.208.145/api/v1/user/addresses").then((res) => {
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
            defaultValue={0}
            value={value}
            onChange={handleChange}
          >
            {isLoaded ? (
              addressList.map((address, index) => {
                //console.log(index);
                if (address["name"] != "Add New Address")
                  return (
                    <FormControlLabel
                      key={index}
                      value={index}
                      control={<Radio />}
                      label={
                        <AddressListGetOld
                          title={address["name"]}
                          description={address["full_address"]}
                          postal_code={address["postal_code"]}
                          province={address["province"]}
                          city={address["city"]}
                          country={address["country"]}
                          id={address["id"]}
                          link={"http://164.92.208.145/api/v1/user/addresses/"}
                        />
                      }
                    />
                  );
              })
            ) : (
              <div>Loading</div>
            )}
          </RadioGroup>
        </FormControl>
        <Box sx={{ ml: 4 }}>
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
