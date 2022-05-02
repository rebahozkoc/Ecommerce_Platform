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
    {"index": 0, "title": "Address List", "firstName": "John", "lastName": "Doe", "description": "This is a description of the address list"},
    {"index": 1, "title": "Home", "firstName": "Rebah", "lastName": "Özkoç", "description": "Fakülteler Mah, Oba Sk. No:1, 06590 Çankaya/Ankara"},
    {"index": 2, "title": "Dormitory", "firstName": "Görkem", "lastName": "Yar", "description": "Sabanci University, 34956 Tuzla, Istanbul, Turkey"},
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
              description={address["description"]}
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
