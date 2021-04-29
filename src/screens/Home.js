import React from 'react'
import Introduction from '../components/Introduction'
import Featured from '../components/Featured'
import '../styles/screens/Home.css'

const Home = (props) => {
  return (
    <div className="homepage__wrapper">
      <Introduction />
      <h2 className="homepage__featured__label">Featured Projects</h2>
      <Featured {...props} />
    </div>
  )
}

export default Home
