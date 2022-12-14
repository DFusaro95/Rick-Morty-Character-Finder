import React from 'react'
import './LocationInfo.css'

const LocationInfo = ({location}) => {
  

  return (
    <article className='info__container'>
      <h2 className='info__title'>{location?.name}</h2>
      <ul className='info__list'>
        <li><span>Type:</span> {location?.type}</li>
        <li><span>Dimension:</span> {location?.dimension}</li>
        <li><span>Population:</span> {location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo