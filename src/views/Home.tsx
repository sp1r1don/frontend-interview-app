import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <p>Welcome to Getsafe's</p>
      <div>
        <Link to="/buy/dev_ins">Purchase Developer Insurance!</Link>
      </div>
      <br />
      <div>
        <Link to="/buy/designer_ins">Purchase Designer Insurance!</Link>
      </div>
    </>
  )
}
