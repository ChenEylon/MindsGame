import { HomePage } from './components/HomePage'
import Myevents from './components/Myevents'
import { Routes,Route} from 'react-router-dom'
import { Layout } from './components/layout'
import { Events } from './components/Events'
import { EventPage } from './components/EventPage'
import { SpecificDay } from './components/SpecificDay'
import  Contactus from './components/Contactus'
import  Login  from './components/Login'
import data from "./MOCK_DATA.json";
import { useState } from 'react'
import DataContext from './DataContext';
import "./App.css"

function App() {
   
  const [dataArr, setDataArr] = useState([...data.data]);
 
  return (
    <>
     <div className='body'>
     <DataContext.Provider value={[dataArr,setDataArr]}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route  path='/' element={<HomePage />}  />
          <Route path='/Events' element={<Events/>} />
          <Route path={`/Events/:id`} element={<EventPage />}  />
          <Route path={`/Myevents`} element={<Myevents/>}  />
          <Route path={`/Myevents/:date`} element={<SpecificDay/>}  />
          <Route path={`/Contactus`} element={<Contactus/>}  />
          <Route path={`/Specificday`} element={<SpecificDay/>}  />
          <Route path={`/Login`} element={<Login/>}  />
        </Route>
      </Routes>
      </DataContext.Provider>
    </div>
    </>
  )
}

export default App
