import React, {useState, useEffect} from 'react'
import ListEpisodes from '../../components/ListEpisodes/ListEpisodes'
import "./episodes.scss"

const Episodes = () => {

  const [episodes, setEpisodes] = useState([])
  let url = `https://rickandmortyapi.com/api/episode`

  const fetchEpisodes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => setEpisodes(data.results))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchEpisodes(url)
  }, [])

  return (
    <div className="episodes__container">
      <ListEpisodes 
        episodes={episodes}
      />
    </div>
  )
}

export default Episodes