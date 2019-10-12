import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS from "./directory.data";

import "./directory.styles.scss";

const Directory = () => {
  const sections = SECTIONS;

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
