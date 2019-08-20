import React from "react";

import image from "../uno.jpg";
import "./index.css";

function thumbnailSignatures() {
  return (
    <div className="main-itens">
      <div className="content-thumbnail">
        <a href="#/" className="content-thumbnail-link">
          <img src={image} alt="thumbnail" className="image" />
          <h3>Title video</h3>
        </a>
      </div>
      <div className="content-thumbnail-items">
        <a href="#/" className="content-thumbnail-channel">
          <span>nome do canal</span>
          <p className="visualization">Visualizacçoes</p>
          <p className="videoItem">Data do video</p>
        </a>
      </div>
    </div>
  );
}

export default thumbnailSignatures;
