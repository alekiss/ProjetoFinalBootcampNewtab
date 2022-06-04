import React from 'react'
import "./nav.scss"
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to={"/"}>
          <div className="nav__logo">
            <img src={Logo} alt="Rick and Morty" />
          </div>
        </Link>
        <Link to={"/characters"}>
          <div className="nav__links">
            <a href="">Personagens</a>
          </div>
        </Link>
        <Link to={"/famous-places"}>
          <div className="nav__links">
            <a href="">Lugares Famosos</a>
          </div>
        </Link>
        <Link to={"/episodes"}>
          <div className="nav__links">
            <a href="">Episódios</a>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav