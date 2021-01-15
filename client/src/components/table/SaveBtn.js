import React from "react";

function SaveBtn(props) {
  console.log(props);
  return (
    <span className="save-btn" {...props} role="button">
      Save
    </span>
  );
}

export default SaveBtn;
