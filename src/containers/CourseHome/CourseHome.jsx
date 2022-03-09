import React, { useState } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'

const CourseHome = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  return (
    <>
    <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
    </>
  )
}

export default CourseHome