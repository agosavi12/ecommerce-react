import React from 'react'
import './MenuItems.scss'

const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      ></div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  )
}

export default MenuItems
