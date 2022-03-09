import React from 'react'
import './MenuItems.scss'

const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  )
}

export default MenuItems
