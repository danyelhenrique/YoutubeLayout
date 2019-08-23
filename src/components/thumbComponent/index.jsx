import React from "react";

import image from "../../assets/image.jpg";

import "./index.css";

export default function index() {
  return (
    <div className="main-itens-thumb">
      <img src={image} alt="thumbnail" className="image-thumb" />
      <div className="content-thumbnail-thumb">
        <a href="#/" className="content-thumbnail-link-thumb">
          <h3>Title video</h3>
        </a>
        <a href="#/" className="content-thumbnail-channel-thumb">
          <span>nome do canal</span>
        </a>
      </div>
    </div>
  );
}
