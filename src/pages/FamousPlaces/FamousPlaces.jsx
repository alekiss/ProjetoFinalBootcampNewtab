import React, { useState, useEffect } from 'react'
import CardFamousPlaces from '../../components/CardsFamousPlaces/CardFamousPlaces'

const FamousPlaces = () => {

  const [location, setLocation] = useState([])
  const [page, setpage] = useState(1)

  let url = `https://rickandmortyapi.com/api/location`

  const loadLocation = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then(data => setLocation(data.results))
        .catch((error) => console.log(error))
  }

  useEffect(() => {
    loadLocation(url)
  }, [])

  return (
    <div className="famousPlaces__container">
      <div>
        <CardFamousPlaces 
          location={location}
        />
      </div>
    </div>
  )
}

export default FamousPlaces