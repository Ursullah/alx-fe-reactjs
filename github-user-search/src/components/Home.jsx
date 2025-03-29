import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'   

const Home = () => {
  return (
    <>
    <div>
          <h1>Go to about page</h1>
      </div>
      <Link to="/about">About</Link>
      <Search />
      </>
  )
 
}

export default Home
