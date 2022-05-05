import React, { useState } from "react";
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
import { getCookie } from "../recoils/atoms";
import axios from "axios";
import { getData } from "../recoils/getterFunctions";
const access = getCookie("access_token");
let headersList = {
  Accept: "*/*",
  Authorization: `Bearer ${access}`,
};

let reqOptions = {
  url: "http://164.92.208.145/api/v1/user/addresses",
  method: "GET",
  headers: headersList,
};

const UpdateAddressPage = () => {
  const [addressList1, setAddressList] = useState();
  let response = [];
  console.log("response is", response);
  //getData().then((res) => console.log(res)); bunu açarsan gümler

  console.log(response);
  //console.log("hello");
  const addressList = response != null ? response : [];
  addressList.push({
    index: -1,
    title: "Add New Address",
    description: "Create a new address...",
  });

  //console.log(addressList);
  const [open, setOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogContent, setDialogContent] = React.useState("");

  const handleClickOpen = (event) => {
    //console.log(event.currentTarget.getAttribute("id"));
    if (event.currentTarget.getAttribute("id") === "-1") {
      setDialogTitle("Add New Address");
      setDialogContent();
    } else {
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
              description={
                address["description"] +
                " " +
                address["zip"] +
                " " +
                address["province"] +
                " " +
                address["city"] +
                " " +
                address["country"]
              }
              id={address["index"]}
              onClick={handleClickOpen}
            />
          </div>
        );
      })}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <AddressListAddNew data={dialogContent} />
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
