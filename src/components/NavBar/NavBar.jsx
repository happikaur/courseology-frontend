import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <Link className="nav-menu__item" to="/">
            _courseology
        </Link>
        <Link className="nav-menu__item" to="/courses">
            Courses
        </Link>
        <Link className="nav-menu__item" to="/add-course">
            Add Course
        </Link>

    </div>
  )
}

export default NavBar