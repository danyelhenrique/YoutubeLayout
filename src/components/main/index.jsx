import React, { useEffect } from "react";
import HOMEPAGE from "../homePage";
// import VIDEO from "../videoComponent";

import "./index.css";

function Main({ menu, setMenu }) {
  const mainSize = !!menu.smallMenu && !!menu.display ? "small" : "";

  // useEffect(() => {
  //   window.addEventListener("resize", getSizeWindow);
  // });

  // function getSizeWindow() {
  //   const checkSizeToSmMenu = window.innerWidth === 1150;
  //   console.log(window.innerWidth, window.innerHeight);
  //   if (!!checkSizeToSmMenu) {
  //     setMenu({ homePage: true, smallMenu: true, display: true });
  //   }
  // }

  return (
    <main className={`main ${mainSize}`}>
      <HOMEPAGE />
      {/* <VIDEO /> */}
    </main>
  );
}

export default Main;
