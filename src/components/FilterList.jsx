import React from 'react'

const FilterList = ({ suggestedList, setSearchLocation }) => {

  console.log(suggestedList)

  const handleClick = id => {
    console.log(id)
    setSearchLocation(id)
  }

  return (
    <ul className='filterList__container' >
      {
        suggestedList?.map(location => (
          <div className="autocomplete__list">
            <li
              className='filter__list'
              onClick={() => handleClick(location.id)}
              key={location.id}>

              {location.name}</li>
          </div>
        ))
      }
    </ul>
  )
}

export default FilterList