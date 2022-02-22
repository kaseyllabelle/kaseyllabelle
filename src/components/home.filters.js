import React from 'react';

export default function Filters(props)
{
  const filtersArray = ['All', 'Development', 'Graphic Design', 'Web Design', 'Fine Art'];
  const filters = filtersArray.map((item) => {
    return(
      <button
        key={btoa (item)} 
        onClick={(e) => {props.filterProjectsProp(item)}} 
        data-filter={item} 
        className="filter" 
        aria-label={`Filter projects by ${item}`}
      >
        {item}
      </button>
    )
  });

  return(
    <div className="filters" data-active-filter={props.currentFilterProp}>
      {filters}
    </div>
  )
}