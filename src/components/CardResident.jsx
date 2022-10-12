import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CardResident.css'

const CardResident = ({ url }) => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  }, [])


  console.log(resident)

  return (
    <article className='card__container'>
      <header className='card__header'>
        <img className='card__image' src={resident?.image} alt="CHARACTER" />
        <div>
          <div className='circle'></div>
          <span className='status__description'>{resident?.status}</span>
        </div>
      </header>
      <section className='card__section'>
        <h3 className='card__title'>{resident?.name}</h3>
        <ul className='card__list'>
          <li className='list__item1'><span>Specie: </span>{resident?.species}</li>
          <li className='list__item2'><span>Origin: </span>{resident?.origin.name}</li>
          <li className='list__item3'><span>Apparitions: </span>{resident?.episode.length}</li>
        </ul>
      </section>
    </article>
  )
}

export default CardResident