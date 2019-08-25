import React, { useState } from "react";

import "./index.css";
import image from "../../../images/image.jpg";
import { MdRepeat } from "react-icons/md";
import { MdShuffle } from "react-icons/md";

const items = Array.from(new Array(21));

export default function INDEX() {
  const [itemPlaylist, setItemPlailist] = useState({ items: items });
  function setPlaylist() {
    return itemPlaylist.items.map((item, index) => (
      <div className="main-playlist" key={index}>
        <a href="#/">
          <img src={image} alt="playlist" />
        </a>

        <div className="playerlist-content">
          <a href="#/">
            <h6>Title Video</h6>
            <p>Name Channel</p>
          </a>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className="playlist-header">
        <div className="items">
          <h3>Title Playlist</h3>
          <a href="#/">Nome channel Playlist</a>
        </div>
        <div className="playlist-items">
          <div className="icons-playlist">
            <a href="#/">
              <MdRepeat />
            </a>
            <a href="#/">
              <MdShuffle />
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="playlist">{setPlaylist()}</div>
    </>
  );
}
