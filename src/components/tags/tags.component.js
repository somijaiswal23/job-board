import React from "react";
import "./tags.style.scss";
function Tags({ list }) {
  const listItems = list.map((item, index) => (
    <span className={`badge badge-${index + 1}`} key={`badge-${index + 1}`}>
      {item}
    </span>
  ));
  return <div>{listItems}</div>;
}

export default Tags;
