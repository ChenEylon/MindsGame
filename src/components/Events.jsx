import React, { useState } from 'react';
import "./Events.css"
import { EventCard } from './EventCard';

export const Events = () => {
  const [dataArr, setDataArr] = useState(JSON.parse(localStorage.getItem("dataArr")));

  return (
    <div>
      <div id='event-container'>
        {dataArr.map((value,index)=><EventCard key={index} index={index} />)}
      </div>
    </div>
  )
}
