import React, { useEffect, useRef } from "react";
import './SearchBox.css';

const SearchBox = (props) => {
const inputRef=useRef();

useEffect(()=>{
  inputRef.current.focus();
},[])

  return (
    <div>
      <input
        onChange={props.onSearchInputChangeHandler}
        className="nosubmit"
        id="outlined-basic"
        variant="outlined"
        label="Search"
        value={props.searchText}
        placeholder="Type to Search..."
        ref={inputRef}
      />
    </div>
  );
};
export default SearchBox;
