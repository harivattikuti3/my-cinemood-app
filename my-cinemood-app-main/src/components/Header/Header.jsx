import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'
const Header = ({darkMode}) => {
  return (
    <div className="header">
        <div className={darkMode?"headerdark":"tagline"}>
            <img src={assets.header} alt="" />
            <h1>Welcome Movie Lovers</h1>
        </div>
        
    </div>
  )
}

export default Header