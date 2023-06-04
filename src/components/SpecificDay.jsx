
import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import "./SpecificDay.css";
import { useParams } from "react-router";



export const SpecificDay = () => {
  const [dataArr, setDataArr] = useState(JSON.parse(localStorage.getItem("dataArr")));
  const [usersArr, setUsersArr] = useState(JSON.parse(localStorage.getItem("dataArr")));
  
  const [dataByDate, setDataByDate] = useState(0);

  
  const { date } = useParams();
  let theDate;

  useEffect(() => {
    theDate= date.replaceAll("-","/");
    setDataByDate(dataArr?.find((view)=> view.date == theDate))
    console.log(dataByDate);
  },[]);

  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [formData, setFormData] = useState({
    // event_name: "",
    // date: "",
    // email: "",
    // start_time: "",
    // duration: "",
    // event_info: "",
    // event_image: "",
    // place_name: "",
    // street_address: "",
    // city: "",
    // lecturer_name: "",
    // lecturer_info: "",
    // price: "",
    // max_amount: "",
    
      event_name: "",
      id: "",
      date: "",
      email: "",
      start_time: "",
      duration: "",
      event_info: "",
      event_image: "",
      place_name: "",
      street_addres: "",
      city: "",
      lecturer_name: "",
      lecturer_info: "",
      price: 120,
      max_amount: 120
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmission = (data) => {
    console.log("Form Data:", data);
    
    setSubmitted(true);
    reset();
  };

  if (!submitted) {
    return (
      <div className="SpecificDay">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="SpecificDay">

                <form
                  id="contact-form"
                  onSubmit={handleSubmit(handleSubmission)}
                  noValidate
                >

                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="event_name"
                        {...register("event_name", { required: true })}
                        value={formData.event_name}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Event Name"
                      />
                      {errors.event_name && (
                        <span className="errorMessage">
                          Please enter the event name
                        </span>
                      )}
                    </div>
                    <div className="col-6">
                      <input
                        type="date"
                        name="date"
                        {...register("date", { required: true })}
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Date"
                      />
                      {errors.date && (
                        <span className="errorMessage">
                          Please enter the date
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Email address"
                      />
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter your email
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="number"
                        name="start_time"
                        {...register("start_time", { required: true })}
                        value={formData.start_time}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Start Time"
                      />
                      {errors.start_time && (
                        <span className="errorMessage">
                          Please enter the start time
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="number"
                        name="duration"
                        {...register("duration", { required: true })}
                        value={formData.duration}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Duration (hours)"
                      />
                      {errors.duration && (
                        <span className="errorMessage">
                          Please enter the duration
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <textarea
                        rows={3}
                        name="event_info"
                        {...register("event_info", { required: true })}
                        value={formData.event_info}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Event Info"
                      />
                      {errors.event_info && (
                        <span className="errorMessage">
                          Please enter the event info
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="event_image"
                        {...register("event_image", { required: true })}
                        value={formData.event_image}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Event Image"
                      />
                      {errors.event_image && (
                        <span className="errorMessage">
                          Please enter the event image
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="place_name"
                        {...register("place_name", { required: true })}
                        value={formData.place_name}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Place Name"
                      />
                      {errors.place_name && (
                        <span className="errorMessage">
                          Please enter the place name
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="street_address"
                        {...register("street_address", { required: true })}
                        value={formData.street_address}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Street Address"
                      />
                      {errors.street_address && (
                        <span className="errorMessage">
                          Please enter the street address
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="city"
                        {...register("city", { required: true })}
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="City"
                      />
                      {errors.city && (
                        <span className="errorMessage">
                          Please enter the city
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="lecturer_name"
                        {...register("lecturer_name", { required: true })}
                        value={formData.lecturer_name}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Lecturer Name"
                      />
                      {errors.lecturer_name && (
                        <span className="errorMessage">
                          Please enter the lecturer name
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="text"
                        name="lecturer_info"
                        {...register("lecturer_info", { required: true })}
                        value={formData.lecturer_info}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Lecturer Info"
                      />
                      {errors.lecturer_info && (
                        <span className="errorMessage">
                          Please enter the lecturer info
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="number"
                        name="price"
                        {...register("price", { required: true })}
                        value={formData.price}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Price"
                      />
                      {errors.price && (
                        <span className="errorMessage">
                          Please enter the price
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row formRow">
                    <div className="col">
                      <input
                        type="number"
                        name="max_amount"
                        {...register("max_amount", { required: true })}
                        value={formData.max_amount}
                        onChange={handleChange}
                        className="form-control formInput"
                        placeholder="Max Amount"
                      />
                      {errors.max_amount && (
                        <span className="errorMessage">
                          Please enter the max amount
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Rest of the form fields */}
                  <div className="row formRow">
                    <div className="col text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="SpecificDay">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Form Submitted Successfully!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
