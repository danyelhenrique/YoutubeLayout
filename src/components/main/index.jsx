import React from "react";
import HOMEPAGE from "../../components/homePage";

import "./index.css";

export default function main({ renderMenu }) {
  const hiddenSpan = !!renderMenu.render ? "hidden" : "";

  return (
    <main className="main">
      <HOMEPAGE />
    </main>
  );
}
