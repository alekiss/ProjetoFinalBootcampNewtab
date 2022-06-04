import React, { useState, useEffect } from 'react'
import "./characters.scss"
import SearchCharacters from '../../components/SearchCharacters/SearchCharacters'
import SearchIcon from "./../../assets/searchIcon.svg"

const Characters = () => {

  const [characters, setCharacters] = useState([])
  let url = `https://rickandmortyapi.com/api/character`

  const fetchCharacter = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then(data => setCharacters(data.results))
        .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchCharacter(url)
  }, [])

console.log(characters)

  return (
    <div className="characters__container">
      <h1>Buscar Personagens</h1>
      <p>Buscar Personagens</p>
      <div className="characters__search">
        <input id="characters" type="text" placeholder='Ex: Rick' />
        <button>
          <img src={SearchIcon} alt="Buscar" />
        </button>
      </div>
      {/* <SearchCharacters 
        characters={characters} 
      /> */}
    </div>
  )
}

export default Characters