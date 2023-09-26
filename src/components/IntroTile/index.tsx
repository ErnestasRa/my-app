import * as React from "react";
import classes from "./introTile.module.scss";

export const IntroTile: React.FC = () => {
  return (
    <div className={classes.container}>
      <span className={classes.titles}>Name</span>
      <span className={classes.titles}>Gender</span>
      <span className={classes.titles}>Mass</span>
      <span className={classes.titles}>Year</span>
    </div>
  );
};
