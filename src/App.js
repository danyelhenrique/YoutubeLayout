import React, { useState } from "react";
import "./App.css";
// import MAIN from "./components/homePage";
import MAIN from "./components/main";
import HEADER from "./components/header";
import ASIDE from "./components/sidebar";

function App() {
  const [renderMenu, setRenderMenu] = useState({ render: true });

  function Menu(value) {
    setRenderMenu({ render: value });
  }

  return (
    <div className="app">
      <HEADER renderMenu={Menu} isTrueOrFalse={renderMenu} />
      <ASIDE renderMenu={renderMenu} />
      <MAIN renderMenu={renderMenu} />
    </div>
  );
}

export default App;
