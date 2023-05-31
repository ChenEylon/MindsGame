import React, { useContext } from "react";
import DataContext from "../DataContext";
import "./EventCard.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";


export const EventCard = ({ index }) => {
  const theContext = useContext(DataContext);
  const theData = theContext[0];
  const setTheData = theContext[1];
  let imgUrl = theData[index].event_image;
  let title = theData[index].event_name;
  let price = theData[index].price;
  let date = theData[index].date;
  let startAt = theData[index].start_time;
  let placeName = theData[index].place_name;
  let city = theData[index].city;
  let id = theData[index].id;

  if(price==0){
    price = "free";
  }
  else{
    price = `${price}$`;
  }


  return (
    <div id="card-container">
      <div id="image-container">
        <img id="the-img" src={imgUrl} />
        <div id="info">
        <div id="card-discription">
        <h3>"{title}"</h3>
          <span>
            {date} , {startAt}
          </span>
          <span> <LocationOnIcon/> "{placeName}", {city}</span>
        </div>
      </div>
      </div>
        <div id="buy-section">
        <span id="price">{price}</span>
        <Link className="link" to={`/Events/${id}`}><span id="view-btn">view</span></Link>
        </div>
    </div>
  );
};
