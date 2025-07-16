import React from "react";
import "./style.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="sky">
        <div className="gift-float" />
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>

      <div className="text">
        <h1>404</h1>
        <p>Oops! That gift floated away...</p>
      </div>
    </div>
  );
};

export default NotFound;
