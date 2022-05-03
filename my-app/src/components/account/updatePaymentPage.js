import React from "react";
import ProfilePageContainer from "./profilePageContainer";
import AddressListGetOld from "../payment/addressList/addressListGetOld";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PaymentAddNew from "../payment/creditCard/paymentAddNew";
import { Typography } from "@mui/material";
const UpdatePaymentPage = () => {
  const addressList = [
    {"index": 0, "title": "Payment Method", "name": "Rebah Özkoç", "cardNumber": "0000 1111 2222 33333 4444", "expireDate": "01/20", "cvv": "123"},
    {"index": 1, "title": "Akbank", "name": "Rebah Özkoç", "cardNumber": "0000 1111 2222 33333 4444", "expireDate": "01/23", "cvv": "123"},
    {"index": 2, "title": "Vakıfbank", "name": "Görkem Yar", "cardNumber": "0000 1111 2222 33333 4444", "expireDate": "01/24", "cvv": "123"},
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
              description={address["name"] + " " + address["cardNumber"]}
              id={address["index"]}
              onClick={handleClickOpen}
            />
          </div>
        );
      })}

<Box sx={{mt:20, ml:5, mr:5}}>
          <Typography color="text.secondary">The payment infrastructure for Voidture Inc. is provided by MasterCard.</Typography>
          <img src="/masterpass.png" width={300} alt="Mastercard" />
          </Box> 

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <PaymentAddNew data={dialogContent}/>
        </DialogContent>
      </Dialog>
    </div>
  );

  return (
    <ProfilePageContainer
      pageIndex={4}
      widget={addressWidget}
    ></ProfilePageContainer>
  );
};

export default UpdatePaymentPage;
