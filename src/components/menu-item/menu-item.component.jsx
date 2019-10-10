import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${title}`)}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
