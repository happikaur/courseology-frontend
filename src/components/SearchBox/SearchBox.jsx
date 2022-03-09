import React from 'react'

const SearchBox = (props) => {

    const { searchTerm, handleInput} = props;
    
    
  return (
    <div className="search-box">
        <label htmlFor="" className="search-box__label" >Find your next course!..</label>
        <input type="search" name="" value={searchTerm} onInput={handleInput} className="search-box__input"/>
    </div>
  )
}

export default SearchBox