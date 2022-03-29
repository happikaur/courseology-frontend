import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="nav-menu" data-testid="nav-menu">
        <Link className="nav-menu__item" to="/" data-testid="nav-menu__item">
            _courseology
        </Link>
        <Link className="nav-menu__item" to="/add-course" data-testid="nav-menu__item">
            Add Course
        </Link>

    </div>
  )
}

export default NavBar