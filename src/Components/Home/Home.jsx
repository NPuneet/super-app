import React from 'react'
import Notes from './Notes'
import Profile from './Profile'
import News from './News'
import Timer from './Timer'
import Weather from './Weather'
// import css from '../Home/Home.module.css'


const Home = () => {
  return (
    <div>
      <Profile/>
      <Notes/>
      <News/>
      <Weather/>
      <Timer/>
    </div>
  )
}

export default Home
