import React from "react";
import "./index.css";
import { FaHome } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import { MdSubscriptions } from "react-icons/md";
import { MdFolder } from "react-icons/md";

import { FaHistory } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

import { MdKeyboardArrowDown } from "react-icons/md";

function index({ menu }) {
  const verifiMenu = !menu.homePage && !menu.display ? "hidden" : "";
  const fullOrSm = !!menu.homePage && !!menu.smallMenu ? "small" : "";
  function renderSidebar() {
    return (
      <aside className={`aside ${fullOrSm} ${verifiMenu}`}>
        <nav className="aside-nav">
          <ul>
            <li className={fullOrSm}>
              <a href="#/" className="selected first-aside-item ">
                <FaHome className="icon-aside selected" />
                <span className={`aside-nav-item ${fullOrSm} selected`}>
                  Inicío
                </span>
              </a>
              <a href="#/" className=" first-aside-item">
                <GoFlame className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>Em alta</span>
              </a>

              <a href="#/" className=" first-aside-item">
                <MdSubscriptions className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>Incrições</span>
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <nav className="aside-nav">
          <ul>
            <li className={fullOrSm}>
              <a href="#/" className=" first-aside-item">
                <MdFolder className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>Biblioteca</span>
              </a>
              <a href="#/" className="second-aside-item">
                <FaHistory className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>Historico</span>
              </a>
              <a href="#/" className="second-aside-item">
                <FaRegClock className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>
                  Assistir mais tarde
                </span>
              </a>
              <a href="#/" className="second-aside-item">
                <FaThumbsUp className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>
                  Vídeos marcados...
                </span>
              </a>
              <a href="#/" className="second-aside-item">
                <MdKeyboardArrowDown className="icon-aside" />
                <span className={`aside-nav-item ${fullOrSm}`}>
                  Mostar mais
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <hr />
      </aside>
    );
  }

  return <>{renderSidebar()}</>;
}

export default index;

//* Refatorar cada lista em um componente
