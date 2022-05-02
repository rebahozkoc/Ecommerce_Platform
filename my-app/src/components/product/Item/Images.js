import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";
import { ThemeProvider } from "@mui/styles";
import themeOptions from "../../theme";
import ImagePop from "./ImagePop";
var items = [
  { image: "furn1.jpg", description: "furn1" },
  { image: "furn2.jpg", description: "furn2" },
  { image: "furn3.jpg", description: "furn3" },
  { image: "furn4.jpg", description: "furn4" },
  { image: "furn5.jpg", description: "furn5" },
  { image: "furn6.jpg", description: "furn6" },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [isPop, setIsPop] = useState(false);
  const [idM, setId] = useState();
  const [imgM, setImg] = useState();

  const clickHandler = (id, img) => {
    setId(id);
    setImg(img);
    setIsPop(true);
  };
  const closeHandler = () => {
    setIsPop(false);
  };
  return (
    <ThemeProvider theme={themeOptions}>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            onClick={() => {
              clickHandler(item.key, item.img);
            }}
            key={item.key}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {isPop && (
        <ImagePop onConfirm={closeHandler} img={imgM} id={idM}></ImagePop>
      )}
    </ThemeProvider>
  );
}

const itemData = [
  {
    img: items[0].image,
    title: items[0].description,
    rows: 2,
    cols: 2,
    key: 1,
  },
  {
    img: items[1].image,
    title: items[1].description,
    key: 2,
  },
  {
    img: items[2].image,
    title: items[2].description,
    key: 3,
  },
  {
    img: items[3].image,
    title: items[3].description,
    cols: 2,
    key: 4,
  },
  {
    img: items[4].image,
    title: items[4].description,
    cols: 2,
    key: 5,
  },
  {
    img: items[5].image,
    title: items[5].description,
    rows: 2,
    cols: 2,
    key: 6,
  },
  {
    img: items[0].image,
    title: items[0].description,
    key: 7,
  },
  {
    img: items[1].image,
    title: items[1].description,
    key: 8,
  },
  {
    img: items[2].image,
    title: items[2].description,
    rows: 2,
    cols: 2,
    key: 9,
  },
  {
    img: items[3].image,
    title: items[3].description,
    key: 0,
  },
  {
    img: items[4].image,
    title: items[4].description,
    key: 10,
  },
  {
    img: items[5].image,
    title: items[5].description,
    cols: 2,
    key: 11,
  },
];
