import React, { useState, useEffect } from "react";
import "./App.css";
// import MAIN from "./components/homePage";
import MAIN from "./components/main";
import HEADER from "./components/header";
import ASIDE from "./components/sidebar";
import VIDEO from "./components/videoComponent";

function App() {
  const [menu, setMenu] = useState({
    homePage: true,
    smallMenu: false,
    display: true
  });

  useEffect(() => {
    checkHomePage();
    window.addEventListener("resize", getSizeWindowAndHomePage);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getSizeWindowAndHomePage);
  });

  function getSizeWindowAndHomePage() {
    const checkSizeToSmMenu = Math.round(window.innerWidth) <= 1150;
    if (!!checkSizeToSmMenu) {
      setMenu({ homePage: true, smallMenu: true, display: true });
    }
  }

  function checkHomePage() {
    if (!menu.homePage) {
      setMenu({ homePage: false, smallMenu: false, display: !menu.display });
    }
  }

  // renderizar o menu pequeno somenente quando for a pagina principal,
  // quando nao for o a pagina principal nao redenrizar o menu pequeno,
  // e por padrao ele fica escondido.

  console.log(menu.homePage, menu.smallMenu, menu.display);
  return (
    <div className="App">
      <HEADER menu={menu} header={setMenu} />

      <ASIDE menu={menu} />
      <MAIN menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default App;
