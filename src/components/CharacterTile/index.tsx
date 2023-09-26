import * as React from "react";
import classes from "./CharacterTile.module.scss";

export type CharacterTileProps = {
  name?: string;
  birth_year?: string;
  gender?: string;
  mass?: string;
  index?: number;
};

export const CharacterTile: React.FC<CharacterTileProps> = ({
  gender,
  mass,
  name,
  birth_year,
  index,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.characterTile}>
        <span className={classes.title}>
          {!!index && `${index}. `} {name}
        </span>
        <span>{gender}</span>
        <span>{birth_year}</span>
        <span>{mass}</span>
      </div>
    </div>
  );
};
