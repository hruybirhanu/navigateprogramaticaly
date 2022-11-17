import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
     <Link to='/'>Home</Link> 
     <Link to='/about'>About</Link>
     <Link to='/ordersummery'>order</Link>
    </nav>
  )
}

export default Navbar
