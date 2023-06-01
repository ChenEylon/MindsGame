import "./myevents.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";



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

  // const dayTileContent = ({ date, view }) => {
  //   if (view === "month") {
  //     return <div onClick={() => }>Day</div>;
  
  //   }
  // };

  return (
    <div className="calender-div">
      <Calendar
        className={"calender"}
        value={value}
        onChange={onChange}
        onClickDay={handleDateClick}
        // tileContent={dayTileContent}
        
      />
    </div>
  );
};

export default Myevents;

// history.pushState({}, "", url);