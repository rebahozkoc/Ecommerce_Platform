import React from "react";
import ProfilePageContainer from "./profilePageContainer";
import AddressListForm from "../payment/addressList/addressListForm";
import AddressListGetOld from "../payment/addressList/addressListGetOld";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddressListAddNew from "../payment/addressList/addressListAddNew";

const UpdateAddressPage = () => {
  const addressList = [
    ["Address List", "This is a description of the address list"],
    ["Home", "Fakülteler Mah, Oba Sk. No:1, 06590 Çankaya/Ankara"],
    ["Dormitory", "Sabanci University, 34956 Tuzla, Istanbul, Turkey"],
    ["Home", "Fakülteler Mah, Oba Sk. No:1, 06590 Çankaya/Ankara"],
    ["Dormitory", "Sabanci University, 34956 Tuzla, Istanbul, Turkey"],
    ["Home", "Fakülteler Mah, Oba Sk. No:1, 06590 Çankaya/Ankara"],
    ["Dormitory", "Sabanci University, 34956 Tuzla, Istanbul, Turkey"],
    ["Home", "Fakülteler Mah, Oba Sk. No:1, 06590 Çankaya/Ankara"],
    ["Dormitory", "Sabanci University, 34956 Tuzla, Istanbul, Turkey"],
  ];

  addressList.push(["Add New Address", "Create a new address..."]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addressWidget = (
    <div>
      {addressList.map((address, index) => {
        return (
          <div key={address.uniqueId} style={{ display: "inline-flex" }}>
            <AddressListGetOld
              isProfile={true}
              isNew={index === addressList.length - 1 ? true : false}
              title={address[0]}
              description={address[1]}
              onClick={handleClickOpen}
            />
          </div>
        );
      })}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {"Add Address"}
        </DialogTitle>
        <DialogContent>
          <AddressListAddNew />
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <ProfilePageContainer
      pageIndex={3}
      widget={addressWidget}
    ></ProfilePageContainer>
  );
};

export default UpdateAddressPage;
