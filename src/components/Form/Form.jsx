import React from 'react'
import Button from '../Button/Button';

const Form = () => {

    
  return (
    <div>
      <h2>Add your course</h2>
      <form action="">
        <label htmlFor="for name">Name:</label>
        <input type="search" name="name"/>

        <label htmlFor="for location">Location:</label>
        <input type="search" name="location"/>

        <label htmlFor="for price">Price:</label>
        <input type="search" name="price"/>

        <label htmlFor="for duration">Duration:</label>
        <input type="search" name="duration"/>

        <label htmlFor="for summary">Summary:</label>
        <input type="search" name="summary"/>

        <Button buttonText={"Cancel"} className='button'/>
        <Button buttonText={"Save"} className='button'/>

      </form>

    </div>
  )
}

export default Form;