import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/screens/NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <section className="notfound__wrapper">
      <h2>Ooops!</h2>
      <p>Nothing here to see.</p>
      <Link to="/">
        <button className="notfound__btn">Go back</button>
      </Link>
    </section>
  )
}
export default NotFoundPage
