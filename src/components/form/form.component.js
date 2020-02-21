import React, { useState, useContext, useEffect } from "react";
import uuid from "uuid";

import "./form.style.scss";
import Selectbox from "../selectbox/selectbox.component";
import FormInput from "../form-input/form-input.component";
import JobsDispatch from "../../providers/jobsProviders";
import { add, update } from "../../actions/action";
import { datGenerator, isValidUrl } from "../../utils/util";

const jobtypes = ["Full Time", "Freelancer", "Part Time", "Contract"];
const defaultState = {
  company: "",
  role: "",
  location: "",
  tags: "",
  url: "",
  type: "Full Time"
};

const Form = ({ history, jobs, match, isEdit }) => {
  /***Initail States */
  const dispatch = useContext(JobsDispatch);
  const [formData, setFormData] = useState(defaultState);
  /***Lifecycle hook */
  useEffect(() => {
    if (isEdit) {
      let selectedJob = jobs.filter(item => item.id === match.params.id);
      setFormData(selectedJob[0]);
    }
  }, [isEdit]);

  /***Input Change handler */
  const handleChange = event => {
    const { name, value } = event.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  };

  /***Submit handler */
  const handlerSubmit = event => {
    event.preventDefault();
    if (isEdit) {
      const img = isValidUrl(formData.url);
      dispatch(update({ ...formData, url: img }));
      history.push("/");
    } else {
      const created_at = datGenerator();
      const img = isValidUrl(formData.url);
      const formattedData = {
        ...formData,
        id: uuid.v4(),
        created_at: created_at,
        url: img
      };
      dispatch(add(formattedData));
      history.push("/");
    }
  };

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handlerSubmit}>
        <FormInput
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          label="Company Name"
          required
          autoComplete="off"
          id="company"
          placeholder="Enter Your Company Name"
        />
        <FormInput
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          label="Job Role"
          required
          autoComplete="off"
          id="role"
          placeholder="Enter Job Role"
        />
        <div className="form-control">
          <label htmlFor="type">
            Job Type <span>*</span>
          </label>
          <Selectbox
            list={jobtypes}
            onChange={handleChange}
            value={formData.type}
            name="type"
          />
        </div>
        <FormInput
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          label="Job Location"
          required
          autoComplete="off"
          id="location"
          placeholder="Enter job location"
        />
        <FormInput
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          label="Enter Major Five Skills Required seperated by commas"
          required
          autoComplete="off"
          id="tags"
          placeholder="Enter Five SKills followed by commas"
        />
        <FormInput
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          label="Company Logo Url"
          autoComplete="off"
          id="url"
          placeholder="Enter your company logo url"
        />
        <div className="form-control">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
