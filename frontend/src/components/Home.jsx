import React from "react"
import "./home.css"
import NavBar from "./navigation/NavBar"

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='home-container'>
        <div className='home__welcome-message'>
          <h1>Hey, Jeff! Today is Date</h1>
        </div>
        <div className='home__app-academy-link'>
          <a href='https://open.appacademy.io/login'>App Academy Online</a>
        </div>
        <div className='home__zoom-meeting'>
          <h2>Zoom Meeting Link</h2>
          <a href='zoom.com'>zoomlinkhere</a>
          <p>zoom password</p>
        </div>
      </div>
    </div>
  )
}

export default Home
