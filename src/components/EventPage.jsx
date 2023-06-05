import { Link, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import "./EventPage.css"
import { useParams } from 'react-router-dom';

export const EventPage = ({ buyMe, setBuyMe }) => {
  const [dataArr, setDataArr] = useState(JSON.parse(localStorage.getItem("dataArr")));
  const [dataid, setDataid] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setDataid(dataArr?.find((view) => view.id == id))
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
        <hr />
        <div className='rest'>
          <div className='firstrest'>

            <h4 className='time'>  {dataid?.date}  </h4>
            <div>
              <span className='name'>  {dataid?.lecturer_name} </span>
              <span className='price' id='lecturerinfo'>{dataid?.lecturer_info} </span>
            </div>
            <h3 className='price'>How much:{dataid?.price}$</h3>
            <div className='third'>
              <h3>
                date and time:  {dataid?.start_time} P.M, {dataid?.date}
              </h3>
              <h3>
              <i class="fa fa-map-marker" aria-hidden="true"></i>:  "{dataid?.place_name}", {dataid?.street_addres}, {dataid?.city}
              </h3>
            </div>
          </div>
          <hr />
          <div className='secondrest'>
            <h5 className='place'>this is a map</h5>
            <h5 className='place'><i class="fa fa-users" aria-hidden="true"></i>: {dataid?.max_amount}</h5>
            <h5 className='place'><i class="fa fa-envelope" aria-hidden="true"></i>:{dataid?.email} </h5>
            <Link onClick={() => setBuyMe(dataid)} to={"/Payment"}><button type="button" class="btn btn-dark">Buy Tickets</button></Link>
          </div>


          <hr />

        </div>
        <h6 className='headlinebottom'> The MindGame of the day:</h6>
        <h6 className='description'> {dataid.event_info}</h6>
      </div>
    </div>

  )
}
