import React, { useContext } from 'react';
import DataContext from '../DataContext';
import "./Events.css"
import { EventCard } from './EventCard';
export const Events = () => {
  const theContext = useContext(DataContext);
  const theData = theContext[0]
  const setTheData = theContext[1]
  return (
    <div>
      <div id='event-container'>
        {theData.map((value,index)=><EventCard key={index} index={index} />)}
      </div>
    </div>
  )
}
