import React from 'react';
import './SearchBox.scss';

const SearchBox = (props) => {

    const { searchTerm, handleInput} = props;
    
    
  return (
    <div className="search-box" data-testid="search-box">
        <label htmlFor="" className="search-box__label" >Find your next course!..</label>
        <input type="search" name="" placeholder='Enter a course title' value={searchTerm} onInput={handleInput} className="search-box__input"/>
    </div>
  )
}

export default SearchBox