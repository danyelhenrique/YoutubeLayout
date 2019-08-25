import React, { useState } from "react";

import Plyr from "react-plyr";
import video from "../../../videos/video.mp4";
import "./index.css";
import PLAYLIST from "../playlistComponent";
import BODYVIDEOCOMPONENT from "../bodyVideoComponent";
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";

// MdThumbDown

// MdThumbUp

export default function INDEX(props) {
  const [activeBtn, setBtn] = useState({ active: false });

  return (
    <main className="main-video-page">
      <div className="main-video-content">
        <Plyr type="video" url={video} hideControls="true" ratio="16:9" />
      </div>
      <div className="play">
        <PLAYLIST />
      </div>
      <div className="content-video">
        <BODYVIDEOCOMPONENT />
      </div>
    </main>
  );
}
