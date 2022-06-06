import React from "react";
import "./listEpisodes.scss";
import DropdownEpisodes from "../Dropdown/DropdownEpisodes";

const ListEpisodes = ({ episodes, season, setSeason }) => {
  const optionsSeasons = [1, 2, 3, 4, 5];

  return (
    <div className="list-episodes__container">
      <h1>Episódios</h1>
      <DropdownEpisodes
        title={"Temporada"}
        options={optionsSeasons}
        select={season}
        setSelect={setSeason}
      />
      {episodes.map((item, index) => (
        <div key={index} className="list-episodes__box">
          <h3>{item.id}</h3>
          <b>{item.name}</b>
          <p>{item.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default ListEpisodes;
