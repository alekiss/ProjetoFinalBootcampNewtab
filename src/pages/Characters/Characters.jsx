import React, { useState, useEffect } from 'react'
import "./characters.scss"
import SearchCharacters from '../../components/SearchCharacters/SearchCharacters'
import SearchIcon from "./../../assets/searchIcon.svg"
import Dropdown from '../../components/Dropdown/Dropdown'
import BackgroundImage from "./../../assets/footer.png"

const Characters = () => {
  
  let url = `https://rickandmortyapi.com/api/character`

  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(0)
  const [status, setStatus] = useState("")
  const [genero, setGenero] = useState("")

  const optionsStatus = ["Alive", "Dead", "unknown"]
  const optionsGenero = ["Female", "Male", "Genderless", "unknown"]
  

  const fetchCharacter = async (url) => {
    await fetch(url)
        .then((response) => response.json())
        .then(data => setCharacters(data.results))
        .catch((error) => console.log(error))
  }

  const onLeftClick = () => {
    
  }

  const onRightClick = () => {

  }

  useEffect(() => {
    fetchCharacter(url)
  }, [])

  return (
    <div className="characters">
      <h1>Buscar Personagens</h1>
      <div className="characters__search">
        <input id="characters" type="text" placeholder=" " className='search-input'/>
        <label className='search-label'>Buscar Personagens</label>
        <button>
          <img src={SearchIcon} alt="Buscar" />
        </button>
      </div>
      <div className="characters__select">
        <div className="characters__select-box">
          <Dropdown 
            title={"Status"}
            options={optionsStatus}
            select={status}
            setSelect={setStatus}
          />
          <Dropdown 
            title={"Gênero"}
            options={optionsGenero}
            select={genero}
            setSelect={setGenero}
          />
        </div>
      </div>
      <div className="characters__results">
        <div className="characters__background">
          <img src={BackgroundImage} alt="Rick and Morty" />
          <small>&copy;rickandmortyapi.com</small>
        </div>
      </div>
      <SearchCharacters 
        characters={characters}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick} 
      />
    </div>
  )
}

export default Characters