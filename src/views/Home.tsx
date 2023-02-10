import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <p>Welcome to Getsafe's Developer Insurance</p>
      <Link to="/buy/dev_ins">Get started!</Link>
    </>
  )
}
