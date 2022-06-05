import React from 'react'
import "./listEpisodes.scss"
import Dropdown from "./../Dropdown/Dropdown"

const ListEpisodes = ({episodes = []}) => {
  return (
    <div className="list-episodes__container">
        <h1>Episódios</h1>
        <select className="list-episodes__select">
          <option value="">Temporada 1</option>
          <option value="">Temporada 2</option>
          <option value="">Temporada 3</option>
          <option value="">Temporada 4</option>
          <option value="">Temporada 5</option>
        </select>
        {
            episodes.map((item, index) => (
                <div key={index} className="list-episodes__box">
                    <h3>{item.id}</h3>
                    <b>{item.name}</b>
                    <p>{item.air_date}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ListEpisodes