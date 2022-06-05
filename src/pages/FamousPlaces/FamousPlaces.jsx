import React, { useState, useEffect } from 'react'
import CardFamousPlaces from '../../components/CardsFamousPlaces/CardFamousPlaces'
import "./famousPlaces.scss"

const FamousPlaces = () => {

  const [location, setLocation] = useState([])
  const [info, setInfo] = useState({})
  const [page, setpage] = useState(1)

  let url = `https://rickandmortyapi.com/api/location`

  const loadLocation = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then(data => {
          setLocation(data.results);
          setInfo(data.info);
        })
        .catch((error) => console.log(error))
  }

  const handleMore = () => {
    loadLocation(info.next)
  }


  useEffect(() => {
    loadLocation(url)
  }, [url])

  return (
    <div className="famousPlaces">
      <div>
        <CardFamousPlaces 
          location={location}
        />
      </div>
      <a className="famousPlaces__more" onClick={handleMore}>Mostrar Mais</a>
    </div>
  )
}

export default FamousPlaces