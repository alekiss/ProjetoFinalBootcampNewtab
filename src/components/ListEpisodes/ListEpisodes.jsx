import React from 'react'
import "./listEpisodes.scss"

const ListEpisodes = ({episodes = []}) => {
  return (
    <div className="list-episodes__container">
        <h1>Episódios</h1>
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