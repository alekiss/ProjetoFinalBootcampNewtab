import React, { useState } from 'react'
import "./nav.scss"
import Logo from './../../assets/logo.png'
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'
import NavSmall from './NavSmall'

const Nav = () => {

  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav((e) => {
      return !e;
    });
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to={"/"}>
          <div className="nav__logo">
            <img src={Logo} alt="Rick and Morty" />
          </div>
        </Link>

        <div className="nav__full">
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

        <div className="nav__hamburger">
          <a onClick={openNav}><GiHamburgerMenu /></a>
        </div>
      </div>

      {showNav && <NavSmall 
        close={setShowNav}
      />}

    </nav>
  )
}

export default Nav