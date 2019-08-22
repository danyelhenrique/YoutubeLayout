import React from "react";

import image from "./uno.jpg";

import "./index.css";

import Plyr from "react-plyr";

import THUMBNAILSIGNATURES from "./thumbnailHomePage/index";
import { hidden } from "ansi-colors";
// thumbnail
const index = ({ renderMenu }) => {
  // const hidenSpan = !!renderMenu.render ? "hidden" : "";
  const hidenSpan = "";
  return (
    <section className={`section ${hidenSpan}`}>
      <h2>Recomendados</h2>
      <div className="section-content">
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
        <THUMBNAILSIGNATURES />
      </div>

      <div className="read-more">
        <a href="#/">
          <span>Mostrar mais</span>
        </a>
        <hr />
      </div>
    </section>
  );
};

export default index;
