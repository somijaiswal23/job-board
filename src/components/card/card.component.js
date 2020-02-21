import React from "react";
import "./card.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import Tags from "../../components/tags/tags.component";
const Card = item => {
  const {
    url,
    company,
    location,
    type,
    created_at,
    role,
    tags,
    editHandler,
    deleteHandler
  } = item;
  let tagsList;
  if (typeof tags == "string") {
    tagsList = tags.split(",");
  } else {
    tagsList = tags;
  }
  return (
    <div className="card row">
      <div className="col-xs-12 col-sm-2 text-center">
        <img src={url} alt={role} />
        <center>{company}</center>
      </div>
      <div className="col-xs-12 col-sm-8">
        <div className="row">
          <div className="col-xs-12 col-sm-6 card-child">
            <div>
              <strong>Position</strong>
              <div>{role}</div>
            </div>
            <div>
              <strong>Job Type</strong>
              <div>{type}</div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 card-child">
            <div>
              <strong>Location</strong>
              <div>{location}</div>
            </div>
            <div>
              <strong>Skills required</strong>
              <Tags list={tagsList} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-2 card-child">
        <div>
          <strong>Posted on</strong>
          <div>{created_at}</div>
        </div>
        <div className="row">
          <CustomButton
            type="button"
            btnType="info col-sm-6"
            onClick={() => editHandler(item)}
          >
            Edit
          </CustomButton>
          <CustomButton
            type="button"
            btnType="danger col-sm-6"
            onClick={() => deleteHandler(item)}
          >
            Delete
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
export default Card;
