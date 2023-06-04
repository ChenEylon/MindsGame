import React, {useState, useEffect } from 'react';
import { HomePage } from './components/HomePage'
import Myevents from './components/Myevents'
import { Routes,Route} from 'react-router-dom'
import { Layout } from './components/layout'
import { Events } from './components/Events'
import { EventPage } from './components/EventPage'
import { SpecificDay } from './components/SpecificDay'
import  Contactus from './components/Contactus'
import  Login  from './components/Login'
import  SignUp  from './components/SignUp'
import data from "./MOCK_DATA.json";
import users from "./UsersData.json";
import "./App.css"

function App() {


  const [isLogIn, setIsLogIn] = useState(false);
  

  if(!localStorage.getItem("dataArr")){
    localStorage.setItem("dataArr",JSON.stringify(data.data));
  }
  
  if(!localStorage.getItem("usersArr")){
    localStorage.setItem("usersArr",JSON.stringify(users.users));
  }



  return (
    <>
     <div className='body'>
      <Routes>
        <Route path="/" element={<Layout isLogIn={isLogIn} setIsLogIn={setIsLogIn}/>}>
          <Route  path='/' element={<HomePage />}  />
          <Route path='/Events' element={<Events/>} />
          <Route path={`/Events/:id`} element={<EventPage />}  />
          <Route path={`/Myevents`} element={<Myevents/>}  />
          <Route path={`/Myevents/:date`} element={<SpecificDay/>}  />
          <Route path={`/Contactus`} element={<Contactus/>}  />
          <Route path={`/Specificday`} element={<SpecificDay/>}  />
          <Route path={`/Login`} element={<Login setIsLogIn={setIsLogIn}/>}  />
          <Route path={`/Signup`} element={<SignUp/>}  />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
