import * as React from "react";
import classes from "./sidebar.module.scss";

export const SideNavBar: React.FC = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/">Films</a>
        </li>
      </ul>
    </div>
  );
};
