import React, { useEffect, useState } from "react";
import "./SpecificDay.css";
import { EventCardUserArr } from "./EventCardUserArr";
import { CreateNewEvent } from "./CreateNewEvent";

export const SpecificDay = () => {

  const [isClickedCreate, setIsClickedCreate] = useState(false);

  const [usersArr, setUsersArr] = useState(
    JSON.parse(localStorage.getItem("usersArr"))
  );
 
  let currentUser = JSON.parse(localStorage.getItem("loginData"));
  
  let userObject = usersArr?.find(
    (view) => view.email == Object.keys(currentUser)[0]
    );
    let myventsArr = userObject.myEvents 
    
    function myeventsCards() {
      return(
        myventsArr.map((value, index) => (
        <EventCardUserArr key={index} index={index} />
      ))
      )
    }

  return( 
    <div>
      <div className="events-cards-section" >
      {myeventsCards()}
      </div>
      <div className="SpecificDay">
      {!isClickedCreate &&  <button class="cssbuttons-io-button" onClick={()=>setIsClickedCreate(true)}> Create new Event
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div>
</button>}
        
      {isClickedCreate &&  <CreateNewEvent/>}
      </div>
  </div>
  )
  
};
