import "./myevents.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from 'react-router-dom';


const Myevents = () => {
  const [value, onChange] = useState(new Date());
  const handleDateClick = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    const url = `/Myevents/${formattedDate}`;
    history.pushState({}, "", url);
    location.reload()
   
    console.log(formattedDate);

  };



  return (
    <div className="calender-div">
      <Calendar
      calendarType='US'
        className={"calender"}
        value={value}
        onChange={onChange}
        onClickDay={handleDateClick}
      />
    </div>
  )

 
};

export default Myevents;

// history.pushState({}, "", url);