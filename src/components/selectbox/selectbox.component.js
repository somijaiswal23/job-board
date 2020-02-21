import React from "react";
function Selectbox({ list, value, ...otherProps }) {
  const listItems = list.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  return (
    <select value={value} {...otherProps}>
      {listItems}
    </select>
  );
}
export default Selectbox;
