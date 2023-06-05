import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'




export const HomePage = () => {
  return (
    <div className='homepage'>
      <div>
        <img className='image' src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGlvbmFsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
        <h1 className='text-overlay'>Unlock Your Mind, Expand Your World: Learn with MindGames!</h1>
      </div>
      <div className='ourgoals'>
        <span className='goal goal1'>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: 'bald' }}>  sell you tickets</span>
          <span>Sell your lecture tickets effortlessly on our platform.
            Reach a wider audience, set prices, and manage inventory easily.
            Say goodbye to manual sales and start selling today.</span>
        </span>
        <span className='goal goal2'>
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: 'bald' }}> promote new ideas</span>
          <span>We support lectures that inspire and ignite innovative thinking.
            Sell tickets on our platform to spread knowledge and bring new ideas to a wider audience.
          </span>
        </span>
        <span className='goal goal3'>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <span style={{ fontSize: "30px", font: 'bald' }}>  give you the best website</span>
          <span>Experience seamless ticket purchasing on our platform. User-friendly interface, intuitive search, and secure transactions.
            Join us and enjoy the best way to buy lecture tickets.</span>
        </span>
      </div>
      <div className='aboutus'>
        <img className='imgabout' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZwV8bkeAZPj8qTkalGzenGazW6BMyd-XKe86MVVfjWH2Lj-OVWSO1ZATtYai4jfPCOY&usqp=CAU" alt="" />
        <div className='about'>
          <span style={{ fontSize: "30px", font: 'bald' }}>About us:</span>
          <span>
            We are a leading ticketing platform dedicated to connecting people with enlightening lectures and events.
            Our mission is to provide a seamless and user-friendly experience for both event organizers and attendees.
            With our innovative platform, event organizers can effortlessly promote their lectures and sell tickets,
            reaching a broader audience and maximizing attendance. At the same time,
            we empower attendees by offering a convenient and secure ticket purchasing process,
            ensuring they don't miss out on thought-provoking experiences. Whether you're a speaker,
            a knowledge-seeker, or simply someone passionate about learning, our website is your go-to
            destination for discovering and engaging with captivating lectures.
            Join us today and embark on a journey of intellectual exploration and inspiration.
          </span>
        </div>
      </div>
      <div className='aboutus'>
        <div className='about'>
          <span style={{ fontSize: "30px", font: 'bald' }}>Why even lectures?</span>
          <span>
            Lectures play a crucial role in education and learning.
            They provide a valuable platform for knowledge dissemination, fostering intellectual growth,
            and encouraging critical thinking. Through lectures, individuals have the opportunity to gain
            insights from experts in various fields, expanding their understanding and perspective.
            These educational sessions promote interactive learning, allowing students to engage with
            the subject matter, ask questions, and participate in discussions. Moreover, lectures serve as
            a catalyst for inspiration, motivating individuals to explore new ideas, challenge conventional
            thinking, and pursue personal and professional development. By attending lectures, individuals
            can enhance their knowledge,
            broaden their horizons, and embark on a continuous journey of learning and discovery.
          </span>
        </div>

        <img className='imgabout2' src="https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDcxMTcwfHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
      </div>
      <div className='goto'>
        <span style={{ fontSize: "30px", font: 'bald' }}>A little bit about our projects:</span>
        <span>

          Our projects are innovative and impactful, designed to make a difference.
          We strive to create solutions that address real-world challenges, pushing
          the boundaries of what is possible. Through extensive research and collaboration,
          we develop projects that deliver meaningful results and contribute to positive change.
          With a focus on quality and excellence,
          our projects aim to inspire and leave a lasting impact on the communities we serve.
        </span>
        <Link to='/events'><button type="button" class="btn btn-dark">Our Lectures</button></Link>
      </div>
    </div>

  )
}
