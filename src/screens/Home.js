import React from 'react'
import Introduction from '../components/Introduction'
import Featured from '../components/Featured'
import '../styles/screens/Home.css'

const Home = (props) => {
  return (
    <div className="homepage__wrapper">
      <Introduction />
      <Featured {...props} />
    </div>
  )
}

export default Home
