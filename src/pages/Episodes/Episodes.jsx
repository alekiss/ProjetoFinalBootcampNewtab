import React, { useState, useEffect } from "react";
import ListEpisodes from "../../components/ListEpisodes/ListEpisodes";
import "./episodes.scss";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [season, setSeason] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  let url = `https://rickandmortyapi.com/api/episode/${season}`;

  const fetchEpisodes = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setEpisodes(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchEpisodes(url);
  }, [url]);

  useEffect(() => {
    let newEpisodes = [];
    episodes.map((item) => {
      item.characters.map((c, index) => {
        const foto = Math.floor(Math.random() * (9 - 1)) + 1;
        if (index === foto) {
          const image = fetch(c)
            .then((res) => res.json())
            .then(({ image }) => {
              newEpisodes.push({ ...item, image });
            });
          return image;
        }
      });
      return item;
    });
  }, [episodes]);

  return (
    <div className="episodes__container">
      <ListEpisodes episodes={episodes} season={season} setSeason={setSeason} />
    </div>
  );
};

export default Episodes;
