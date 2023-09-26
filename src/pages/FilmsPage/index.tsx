import * as React from "react";
import classes from "./films.module.scss";
import { FilmTile } from "../../components/FilmTile";
import { DataContext } from "../../context/DataContext";
import { CharacterTile, LoaderSpinner } from "../../components";

export const FilmsPage: React.FC = () => {
  const { films, setSelectedMovie, filteredCharacters } =
    React.useContext(DataContext);

  return !!films ? (
    <div className={classes.container}>
      <div className={classes.upperPanel}>
        {!!films &&
          films.map((film, i) => {
            return (
              <FilmTile
                title={film.title}
                episodeID={film.episode_id}
                releaseDate={film.created}
                key={i}
                events={{
                  onShowPeopleClick: () => {
                    if (!!setSelectedMovie) setSelectedMovie(Array(film));
                  },
                }}
              />
            );
          })}
      </div>
      <div className={classes.lowerPanel}>
        {!!filteredCharacters &&
          filteredCharacters.map((person, i) => {
            return (
              <CharacterTile
                gender={person.gender}
                mass={person.mass}
                name={person.name}
                index={i + 1}
                key={i}
                birth_year={person.birth_year}
              />
            );
          })}
      </div>
    </div>
  ) : (
    <LoaderSpinner />
  );
};
