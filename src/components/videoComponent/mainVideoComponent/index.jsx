import React from "react";

import Plyr from "react-plyr";
import video from "../../../videos/video.mp4";
import "./index.css";
import PLAYLIST from "../playlistComponent";

export default function index(props) {
  return (
    <main className="main-video-page">
      <div className="main-video-content">
        <Plyr type="video" url={video} hideControls="true" ratio="16:9" />
      </div>
      <div className="play">
        <PLAYLIST />
      </div>
    </main>
  );
}
