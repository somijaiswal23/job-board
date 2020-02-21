import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, btnType, ...otherProps }) => (
  <button className={`${btnType} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
