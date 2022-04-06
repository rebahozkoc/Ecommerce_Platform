import React from "react";
function Image(props) {
  // Import result is the URL of your image
  return (
    <div>
      <img src={props.demo} alt="Logo" height={50} width={120} />
    </div>
  );
}

export default Image;
