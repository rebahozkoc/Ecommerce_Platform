import React, { Component, PropTypes } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { List, ListItem, Typography, Card, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import InvoiceCard from "./InvoiceCard";
import InvoiceAddress from "./InvoiceAddress";
import { getData } from "../recoils/getterFunctions";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

const Export = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [c, setOrder] = useState([]);

  useEffect(() => {
    getData(`http://164.92.208.145/api/v1/users/orders`)
      .then((res) => {
        setOrder(res.data);
        console.log(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("hellooooo");
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("invoice.pdf");
    });
  };

  let totalCost = 0;

  return (
    <div>
      <div id="divToPrint" className="mt4">
        {isLoaded ? (
          <>
            <List>
              {c.map(
                (card) => (
                  console.log("card", card),
                  (
                    <ListItem key={card.product.id}>
                      <InvoiceCard
                        imageId={card.product.photos[0].photo_url}
                        cost={card.product.price}
                        title={card.product.title}
                        id={card.product.id}
                        stock={card.stock}
                        count={card.quantity}
                        model={card.product.model}
                      >
                        {(totalCost += card.product.price * card.quantity)}
                      </InvoiceCard>
                    </ListItem>
                  )
                )
              )}
            </List>
            <InvoiceAddress
              country={c[0].address.country}
              zip={c[0].address.postal_code}
              id={c[0].address.id}
              city={c[0].address.city}
              full_address={c[0].address.full_address}
              personal_name={c[0].address.personal_name}
            ></InvoiceAddress>
            <Box disableRipple sx={{ width: 500 }}>
              <Typography fontSize={12} sx={{ pl: 3 }}>
                Total Cost is {totalCost}$
              </Typography>
            </Box>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="mb5">
        <Button onClick={printDocument}>Get PDF</Button>
      </div>
    </div>
  );
};
export default Export;
