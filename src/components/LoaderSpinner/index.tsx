import * as React from "react";
import classes from "./loader.module.scss";

export const LoaderSpinner: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader} />
      <span className={classes.text}>Fetching data...</span>
    </div>
  );
};
