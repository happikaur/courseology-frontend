import React, { useState, useEffect } from 'react'
import Courses from '../../components/Courses/Courses';
import SearchBox from '../../components/SearchBox/SearchBox'

const CourseHome = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({});

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  const getCourses = () => {
    fetch("http://localhost:8080/courses", {
      method: "GET",
      headers: {
        'Accept': "application/JSON",
        'Content-Type': "application/JSON"
      },
    })
  }

  useEffect( () => {
    setData(getCourses())
  },[searchTerm]) 

  return (
    <>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <Courses />
    </>
  )
}

export default CourseHome