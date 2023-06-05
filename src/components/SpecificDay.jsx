import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import "./SpecificDay.css";
import { useParams } from "react-router";
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
      {!isClickedCreate &&  <button className="btn btn-primary" onClick={()=>setIsClickedCreate(true)}>
          Create New Form
        </button>}
        
      {isClickedCreate &&  <CreateNewEvent/>}
      </div>
  </div>
  )
  
};
