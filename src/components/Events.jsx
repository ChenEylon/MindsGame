import React, { useState, useEffect } from 'react';
import "./Events.css"
import { EventCard } from './EventCard';

export const Events = () => {
  
  const [dataArr, setDataArr] = useState(JSON.parse(localStorage.getItem("dataArr")));
  

  function sortByPrice(chosen) {
    if (chosen == "Low-To-High") {
      setDataArr((prev) => prev.sort((a, b) => a.price - b.price));
     console.log(dataArr);
    } else {
      setDataArr((prev)=>prev.sort((a, b) => b.price - a.price));
    }
  }
  return (
    <div>
      <select id="sort" onChange={(e) => sortByPrice(e.target.value)}>
        <option value="sort by price">Sort By Price</option>
        <option value="high-to-low">High To Low</option>
        <option value="Low-To-High">Low To High</option>
      </select>
      <div id='event-container'>
        {dataArr.map((value,index)=><EventCard key={index} index={index} />)}
      </div>
    </div>
  )
}
