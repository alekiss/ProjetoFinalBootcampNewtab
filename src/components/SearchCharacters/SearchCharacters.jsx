import React from 'react'

const SearchCharacters = ({characters = []}) => {
  return (
    <div>
        {
            characters.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt="" />
                    {item.name}
                </div>
            ))
        }
    </div>
  )
}

export default SearchCharacters