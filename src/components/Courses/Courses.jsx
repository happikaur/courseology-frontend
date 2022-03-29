import React from 'react'
import Course from './Course/Course'
import './Courses.scss';

const Courses = () => {

   

  return (
    <div className='course-search'>
      <h3 className='course-search__title'>Course Results...</h3>
      <Course />
   
    </div>
  )
}

export default Courses