
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import Error from './components/Error'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()
  const [searchLocation, setSearchLocation] = useState()
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)



  useEffect(() => {
    let id = getRandomNumber()
    if (searchLocation) {
      id = searchLocation
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchLocation])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchLocation(event.target.idLocation.value)
  }

  const handleChange = event => {

    if (event.target.value === '') {
      setSuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }

  }


  return (
    <div className="App">
      <div className="div__container">
        <header>
          <div className='header__image'>
            <img src="./public/logohd.jpg" alt="IMG" />
          </div>
        </header>
        <form onSubmit={handleSubmit} className='form__container'>
          <input
            className='input__box'
            id='idLocation'
            placeholder='Enter a number from 1 to 126..'
            type="text"
            onChange={handleChange}
          />
          <button className='input__button'>Search</button>
          <FilterList
            suggestedList={suggestedList}
            setSearchLocation={setSearchLocation} />
        </form>
      </div>
      {
        hasError ?
          <Error />
          :
          <>
            <LocationInfo location={location} />
            <div className='information'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url} />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
