import React from 'react'
import Pagination from './../Pagination/Pagination'
import "./searchCharacters.scss"

const SearchCharacters = ({characters, onRightClick, onLeftClick}) => {
  return (
    <div className="searchCharacters">
      <p className="searchCharacters__title">Resultados</p>

        <div className="searchCharacters__container">
        {
            characters.map((item, index) => (
                <div key={index} className="searchCharacters__contant">
                    <div className="searchCharacters__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="searchCharacters__information">
                      <h1>{item.name}</h1>
                      <div className="searchCharacters__state"> 
                        <div className={item.status}></div>
                        - {item.species}
                      </div>
                      <p>Primeira aparição: {}</p>
                      <p>Última aparição: {}</p>
                    </div>
                </div>
            ))
        }
        </div>
        <div className="searchCharacters__footer">
          <small>&copy;rickandmortyapi.com</small>
        </div>
        <Pagination 
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />

    </div>
  )
}

export default SearchCharacters