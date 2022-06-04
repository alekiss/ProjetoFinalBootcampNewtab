import React from 'react'
import "./cardsFamousPlaces.scss"

const CardFamousPlaces = ({location = []}) => {

  return (
    <div className="card-famous-places__container">
      <h1>Lugares Famosos de Rick and Morty</h1>
      <div className="card-famous-places__box">
          {
            location.map((item, index) => (
              <div key={index} className="card-famous-places__item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.dimension}</p>
                </div>
                <div>
                  <img src={item} alt="" />
                </div>
              </div>
            ))

          }
      </div>
    </div>
  )
}

export default CardFamousPlaces