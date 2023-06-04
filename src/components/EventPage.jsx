import React, { useContext, useEffect, useState } from 'react';

import "./EventPage.css"
import { useParams } from 'react-router-dom';

export const EventPage = () => {
  const [dataArr, setDataArr] = useState(JSON.parse(localStorage.getItem("dataArr")));
  const [dataid,setDataid] = useState(0) ;
  const { id } = useParams();
  
  useEffect(() => {
    setDataid(dataArr?.find((view) =>view.id == id))
  }, []);

  return (
    <div className='eventpage'>
      <div className="imgdiv"   >
        <img className='img' src={dataid?.event_image} alt="nothing" />
      </div>

      <div id='main-section'>
        <div className='headline'>
          <h1 className='lecture'>{dataid?.event_name}</h1>
        </div>
        <div className='rest'>
          <div className='firstrest'>

            <h4 className='time'>  {dataid?.date}  </h4>
            <div>
              <span className='name'>  {dataid?.lecturer_name} </span>
              <span className='price' id='lecturerinfo'>{dataid?.lecturer_info} </span>
            </div>
            <h3 className='price'>How much:85</h3>
            <div className='third'>
              <h3>
                date and time:  {dataid?.start_time} P.M, {dataid?.date}
              </h3>
              <h3>
                Location:  "{dataid?.place_name}", {dataid?.street_addres}, {dataid?.city}
              </h3>
            </div>
          </div>
          <div className='secondrest'>
            <h5 className='place'>this is a map</h5>
            <h5 className='place'>this is the capacity</h5>
            <h5 className='place'>for contact:{dataid?.email} </h5>
            <button>this is the buy</button>
          </div>




        </div>
        <h6 className='headlinebottom'> The MindGame of the day:</h6>
        <h6 className='description'> {dataid.event_info}</h6>
      </div>
    </div>

  )
}
