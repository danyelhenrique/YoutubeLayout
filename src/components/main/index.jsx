import React, { useEffect } from "react";
import HOMEPAGE from "../homePage";
import VIDEO from "../videoComponent/mainVideoComponent";
import vim from "../../videos/video.mp4";

import "./index.css";

function Main({ menu, setMenu }) {
  // const mainSize = !!menu.smallMenu && !!menu.display ? "small" : "";
  const mainSize = "";

  return (
    <main className={`main ${mainSize}`}>
      <VIDEO />
    </main>
  );
}

export default Main;
