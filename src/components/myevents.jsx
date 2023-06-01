
import './myevents.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Myevents = () => {
    const [value, onChange] = useState(new Date());
    const handleDateClick = (date) => {
      console.log('Clicked date:', date);
    };
  
    const dayTileContent = ({ date, view }) => {
      if (view === 'month') {
        return <button onClick={() => handleDateClick(date)}>Day</button>;
      }
    };
  
  return (
    <div className='calender-div'>
      <Calendar className={"calender"} value={value} onChange={onChange} tileContent={dayTileContent} />
    </div>
  )
}

export default Myevents