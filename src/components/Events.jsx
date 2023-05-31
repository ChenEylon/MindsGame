import React, { useContext } from 'react';
import DataContext from '../DataContext';
import "./Events.css"

export const Events = () => {
  const theContext = useContext(DataContext);
  const theData = theContext[0]
  const setTheData = theContext[1]
  
  console.log(theData[0].email);
  return (
    <div>Events</div>
  )
}
