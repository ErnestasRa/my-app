import * as React from "react";
import classes from "./about.module.scss";

export type AboutPageProps = {
  text?: string;
};

export const AboutPage: React.FC<AboutPageProps> = ({ text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>{text}</h1>
      </div>
    </div>
  );
};
