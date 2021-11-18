//column. Space in between, center them, make them bigger. Put images in.
//Put it over a Background image?

// Libraries
// import AxiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";
import { connect } from "react-redux";
// import {useHistory} from "react-router-dom"
// Actions
import { addNewClass } from "../actions/classActions";
import { useNavigate } from "react-router-dom";

// Initial State (this is subject to change)
const initialValues = {
  name: "",
  type: "",
  startTime: "",
  duration: {
    hours: "",
    minutes: "",
    seconds: ""
  },
  intensityLevel: "",
  location: "",
  currentlyEnrolled: "",
  classSizeLimit: ""
};



function AddClassForm({ addNewClass }) {
  const [classValues, setClassValues] = useState(initialValues);
  let navigate = useNavigate();

  const handleChange = e => {
    setClassValues({ ...classValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewClass(classValues);
    // AxiosWithAuth()
    //     .post('/', classValues)
    //     .then(resp=> {
    //         console.log(resp);
    //         push('/');
    //     })
    //     .catch(err=> {
    //         console.log(err);
    //     })
    // push('/classes');
    navigate('/classes')
  };

  return (
    <div className= 'addclasscontainer'>
      <section className= 'addclassform'>
        <h1 className= 'addclassh1'>Add a class</h1>

        <form onSubmit={handleSubmit}>
          <label>Class Name</label>
          <input className= 'form-item'
            id="name"
            name="name"
            type='text'
            value={classValues.name}
            onChange={handleChange}
            maxLength="30"
            required = 'true'
          />

          <label>Class Type</label>
          <input className= 'form-item'
            id="type"
            name="type"
            type='text'
            value={classValues.type}
            onChange={handleChange}
            maxLength="15"
            required = 'true'
          />

          <label>Start Time</label>
          <input className= 'form-item'
            id="startTime"
            name="startTime"
            type='text'
            value={classValues.startTime}
            onChange={handleChange}
            required = 'true'
          />

          <label>Duration</label>
          <input className= 'form-item'
            id="duration"
            name="duration"
            type='text'
            value={classValues.duration}
            onChange={handleChange}
            required = 'true'
          />

          <label>Intensity Level</label>
          <input className= 'form-item'
            id="intensityLevel"
            name="intensityLevel"
            type='text'
            value={classValues.intensityLevel}
            onChange={handleChange}
            required = 'true'
          />

          <label>Location</label>
          <input className= 'form-item' 
            className='form-item'
            id="location"
            name="location"
            type='text'
            value={classValues.location}
            onChange={handleChange}
            required = 'true'
          />

          <label>Max Class Size</label>
          <input className= 'form-item'
            id="classLimit"
            name="classLimit"
            type="number"
            value={classValues.classLimit}
            onChange={handleChange}
            required = 'true'
          />
          <button> Add Class </button>
        </form>
        </section>

      <section className='addclassimg'>
        {/* background image for right side of component goes here */}

      </section>
    </div>
  );
}

export default connect(null, { addNewClass })(AddClassForm);
