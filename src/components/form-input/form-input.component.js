import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, id, required, ...otherProps }) => (
  <div className="form-control">
    <label htmlFor={id}>
      {label} <span>{required ? "*" : ""}</span>
    </label>
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);
export default FormInput;
