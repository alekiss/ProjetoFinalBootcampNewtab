import React, { useState, useEffect } from "react";
import "./characters.scss";
import SearchCharacters from "../../components/SearchCharacters/SearchCharacters";
import SearchIcon from "./../../assets/searchIcon.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import BackgroundImage from "./../../assets/footer.png";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const [genero, setGenero] = useState("");
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${genero}`;

  const optionsStatus = ["Alive", "Dead", "unknown"];
  const optionsGenero = ["Female", "Male", "Genderless", "unknown"];

  const fetchCharacter = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onHandlePrevious = () => {
    setPageNumber(pageNumber - 1);
  };

  const onHandleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetchCharacter(url);
  }, [url]);

  return (
    <div className="characters">
      <h1>Buscar Personagens</h1>
      <div className="characters__search">
        <input
          id="characters"
          type="text"
          placeholder=" "
          className="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <label className="search-label">Buscar Personagens</label>
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

      {search === " " ? (
        <div className="characters__results">
          <div className="characters__background">
            <img src={BackgroundImage} alt="Rick and Morty" />
            <small>&copy;rickandmortyapi.com</small>
          </div>
        </div>
      ) : (
        <div className="characters__searchCharacters">
          <p className="searchCharacters__title">Resultados</p>
          <div className="searchCharacters__container">
            {characters.map((item, index) => {
              return (
                <SearchCharacters
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  species={item.species}
                  gender={item.gender}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className="characters__pagination">
        <div className="pages" onClick={onHandlePrevious}></div>
        <div className="fixed"></div>
        <div className="pages" onClick={onHandleNext}></div>
      </div>
      <div className="characters__footer">
        <small>&copy;rickandmortyapi.com</small>
      </div>
    </div>
  );
};

export default Characters;
