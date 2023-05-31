import React, { useContext } from 'react';
import DataContext from '../DataContext';
import "./EventCard.css"

export const EventCard = () => {
  const theContext = useContext(DataContext);
  const theData = theContext[0]
  const setTheData = theContext[1]
  // let imgUrl = theData.
  return (
    <div id='card container'>
        <div id='image'>
          <img src=""  />
        </div>
    </div>
  )
}
