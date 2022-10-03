import React from 'react'
import './Error.css'

const Error = () => {
  return (
    <div className='error__container animate__animated animate__fadeIn'>
      <h2 className='error__title animate__animated animate__fadeIn'>This Location is not found</h2>
      <div className="img__container">
        <img src="../public/RyM.jpg" alt="" className='error__img animate__animated animate__fadeIn'  />
      </div>
    </div>
  )
}

export default Error