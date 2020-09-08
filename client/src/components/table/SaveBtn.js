import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
    console.log(props);
  return (
    <span className="save-btn" {...props} role="button">
      Save
    </span>
  );
}

export default SaveBtn;