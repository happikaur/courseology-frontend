import React from 'react'
import Button from '../Button/Button';
import './Form.scss';

const Form = () => {

    
  return (
    <div>
      <h2 className='add-course-title'>Add your course</h2>
      <form action="" className="form" data-testid="form">
        <p>
          <label htmlFor="for name" className='form__label'>Name:</label>
          <input type="search" name="name" placeholder='name' className='form__input' />
        </p>

        <p>
          <label htmlFor="for location" className='form__label'>Location:</label>
          <input type="search" name="location" placeholder='location' className='form__input' />
        </p>

        <p>
          <label htmlFor="for price" className='form__label'>Price:</label>
          <input type="search" name="price" placeholder='price' className='form__input' />
        </p>

        <p>
          <label htmlFor="for duration" className='form__label'>Duration:</label>
          <input type="search" name="duration" placeholder='duration'className='form__input' />
        </p>

        <p>
          <label htmlFor="for summary" className='form__label'>Summary:</label>
          <textarea type="search" name="summary" placeholder='summary' className='form__input' rows="4"></textarea>
        </p>

      </form>

        <Button buttonText={"Cancel"} className='button'/>
        <Button buttonText={"Save"} className='button'/>

      

    </div>
  )
}

export default Form;