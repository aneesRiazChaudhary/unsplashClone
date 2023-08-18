import React from 'react'
import {AiOutlineSearch } from 'react-icons/ai'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='NavBarContainer'>
      <img src={require('../../../assetts/images/unsplash-logo.jpg')} alt='picture of unsplash logo' />
      <form>

        <AiOutlineSearch/>
        <input type='text' required />
      </form>
      <span>advertisement</span>
      <span>Blog</span>
      <span>advertisement</span>
      <span>unsplash</span>
      
    </div>
  )
}

export default NavBar
