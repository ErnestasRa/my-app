import * as React from "react";
import classes from "./filmTile.module.scss";

export type FilmTileProps = {
  title?: string;
  releaseDate?: string;
  episodeID?: string;
  people?: string[];
  events?: {
    onShowPeopleClick?: () => void;
  };
};

export const FilmTile: React.FC<FilmTileProps> = ({
  episodeID,
  title,
  releaseDate,
  events,
}: FilmTileProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.titlesContainer}>
        <h2>{title}</h2>
        <span>Release date: {releaseDate}</span>
        <button onClick={() => events?.onShowPeopleClick?.()}>
          <text>Show People</text>
        </button>
      </div>
      <div className={classes.episodeContainer}>
        <span>{episodeID}</span>
      </div>
    </div>
  );
};
