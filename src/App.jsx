import { HomePage } from './components/HomePage'
import Myevents from './components/Myevents'
import { Routes,Route} from 'react-router-dom'
import { Layout } from './components/layout'
import { Events } from './components/Events'
import { EventPage } from './components/EventPage'
import { SpecificDay } from './components/SpecificDay'
import { Login } from './components/Login'
import { Contactus } from './components/Contactus'
import "./App.css"
function App() {

  return (
    <>
     <div className='body'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route  path='/' element={<HomePage />}  />
          <Route path='/Events' element={<Events  />} />
          <Route path={`/Events/:id`} element={<EventPage />}  />
          <Route path={`/Myevents`} element={<Myevents/>}  />
          <Route path={`/Myevents:day`} element={<SpecificDay/>}  />
          <Route path={`/Contactus`} element={<Contactus/>}  />
          <Route path={`/Login`} element={<Login/>}  />
         
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
