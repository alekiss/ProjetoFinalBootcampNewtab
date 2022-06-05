import React from 'react'
import { Link } from 'react-router-dom'
import {CgClose} from 'react-icons/cg'

const NavSmall = ({close}) => {
  return (
    <div className="nav-small">
        <div className="nav-small__container">
            <a onClick={ () => close(false)} className="nav-small__close"><CgClose /></a>
            <Link to={"/characters"}>
                <a href="" className="nav-small__links">Personagens</a>
            </Link>
            <Link to={"/famous-places"}>
                <a href="" className="nav-small__links">Lugares Famosos</a>
            </Link>
            <Link to={"/episodes"}>
            <a href="" className="nav-small__links">Episódios</a>
            </Link>
        </div>
    </div>
  )
}

export default NavSmall