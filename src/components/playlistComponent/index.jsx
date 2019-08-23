import React from "react";

import THUMB from "../thumbComponent";
import "./index.css";

import { MdRepeat } from "react-icons/md";
import { MdShuffle } from "react-icons/md";

export default function index() {
  return (
    <div className="main-playlist">
      <div className="playlist">
        <div className="title-playlist">
          <h1>Title Playlist</h1>
          <p>name of creator</p>
          <div className="icons">
            <MdRepeat />
            <MdShuffle />
          </div>
        </div>
        <div className="thumb-thumb">
          <THUMB />
        </div>
      </div>
    </div>
  );
}

const style = {};
