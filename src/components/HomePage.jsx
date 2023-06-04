import React from 'react'
import "./HomePage.css"


export const HomePage = () => {
  return (
    <div className='homepage'>
      <img className='image' src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGlvbmFsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
   <div className='ourgoals'>
   <span className='goal goal1'>
    sell you tickets
   </span>
   <span className='goal goal2'>
promote new ideas
   </span>
   <span className='goal goal3'>
give you the best website
   </span>
   </div>
    </div>
    
  )
}
