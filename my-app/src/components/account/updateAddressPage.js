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
    {"index": 0, "title": "Address List", "name": "John Doe", "phoneNumber": "05071111144", "description": "This is a description of the address list",  "zip": "34956", "province": "Tuzla", "city": "Istanbul","country": "Turkey"},
    {"index": 1, "title": "Home", "name": "Rebah Özkoç", "phoneNumber": "05071111144", "description": "Fakülteler Mah, Oba Sk. No:1", "zip": "06590", "province": "Çankaya", "city": "Ankara","country": "Turkey"},
    {"index": 2, "title": "Dormitory", "name": "Görkem Yar", "phoneNumber": "05071111144", "description": "Sabanci University", "zip": "34956", "province": "Tuzla", "city": "Istanbul","country": "Turkey"},
    ];


  addressList.push({"index": -1, "title": "Add New Address", "description": "Create a new address..."});
      

  const [open, setOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogContent, setDialogContent] = React.useState("");

  const handleClickOpen = (event) => {
      console.log(event.currentTarget.getAttribute("id"));
      if(event.currentTarget.getAttribute("id") === "-1"){
        setDialogTitle("Add New Address");
        setDialogContent();
      }else{
        setDialogTitle("Edit Address");
        setDialogContent(addressList[event.currentTarget.getAttribute("id")]);
        }
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
              title={address["title"]}
              description={address["description"] + " " + address["zip"] + " " + address["province"] + " " + address["city"] + " " + address["country"]}
              id={address["index"]}
              onClick={handleClickOpen}
            />
          </div>
        );
      })}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <AddressListAddNew data={dialogContent}/>
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
