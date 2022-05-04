import React, { Component, PropTypes } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { List, ListItem, Typography, Card, Box } from "@mui/material";

import InvoiceCard from "./InvoiceCard";
// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

let c = [
  {
    key: 61,
    imageId: "furn1.jpg",
    cost: 1200,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 2,
    stock: 40,
  },
  {
    key: 62,
    imageId: "furn2.jpg",
    cost: 120,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 2,
  },
  {
    key: 63,
    imageId: "furn3.jpg",
    cost: 1300,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 3,
  },
  {
    key: 64,
    imageId: "furn4.jpg",
    cost: 1515,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 4,
  },
  {
    key: 65,
    imageId: "furn5.jpg",
    cost: 121.22,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 6,
    stock: 6,
  },
  {
    key: 66,
    imageId: "furn6.jpg",
    cost: 123.67,
    title: "Sofa",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    count: 1,
    stock: 4123,
  },
];

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("invoice.pdf");
    });
  }
  render() {
    let totalCost = 0;
    console.log("hello");
    return (
      <div>
        <div id="divToPrint" className="mt4">
          <List>
            {c.map((card) => (
              <ListItem key={card.key}>
                <InvoiceCard
                  imageId={card.imageId}
                  cost={card.cost}
                  description={card.description}
                  title={card.title}
                  id={card.key}
                  stock={card.stock}
                  count={card.count}
                >
                  {(totalCost += card.cost * card.count)}
                </InvoiceCard>
              </ListItem>
            ))}
          </List>
          <Box disableRipple sx={{ width: 500 }}>
            <Typography>Total Cost is {totalCost}</Typography>
          </Box>
        </div>

        <div className="mb5">
          <button onClick={this.printDocument}>Get PDF</button>
        </div>
      </div>
    );
  }
}
