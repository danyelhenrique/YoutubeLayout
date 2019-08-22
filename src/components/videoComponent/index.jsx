import React from "react";

import Plyr from "react-plyr";
import video from "../../videos/video.mp4";
import "./index.css";

export default function index() {
  return (
    <div className="main-video">
      <Plyr type="video" url={video} />
    </div>
  );
}
