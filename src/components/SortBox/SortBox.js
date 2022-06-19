import React from "react";
import './SortBox.css';
const SortBox = (props) => {
  return (
    <div>
      <select className="sortBox" defaultValue={'DEFAULT'} onChange={props.onSortInputChangeHandler}>
        <option value="DEFAULT" disabled>Sort By...</option>
        <option value="ByEpisode">Episode</option>
        <option value="ByYear">Year</option>
      </select>
    </div>
  );
};
export default SortBox;
