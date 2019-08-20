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

function index({ renderMenu }) {
  const hiidenSpan = !!renderMenu.render ? "hidden" : "";
  function renderSidebar() {
    return (
      <div className="abcd">
        <aside className={`aside ${hiidenSpan}`}>
          <nav className="aside-nav">
            <ul>
              <li className={hiidenSpan}>
                <a href="#/" className="selected first-aside-item ">
                  <FaHome className="icon-aside selected" />
                  <span className={`aside-nav-item ${hiidenSpan} selected`}>
                    Inicío
                  </span>
                </a>
                <a href="#/" className=" first-aside-item">
                  <GoFlame className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Em alta
                  </span>
                </a>

                <a href="#/" className=" first-aside-item">
                  <MdSubscriptions className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Incrições
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <hr />
          <nav className="aside-nav">
            <ul>
              <li className={hiidenSpan}>
                <a href="#/" className=" first-aside-item">
                  <MdFolder className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Biblioteca
                  </span>
                </a>
                <a href="#/" className="second-aside-item">
                  <FaHistory className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Historico
                  </span>
                </a>
                <a href="#/" className="second-aside-item">
                  <FaRegClock className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Assistir mais tarde
                  </span>
                </a>
                <a href="#/" className="second-aside-item">
                  <FaThumbsUp className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Vídeos marcados...
                  </span>
                </a>
                <a href="#/" className="second-aside-item">
                  <MdKeyboardArrowDown className="icon-aside" />
                  <span className={`aside-nav-item ${hiidenSpan}`}>
                    Mostar mais
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <hr />
        </aside>
      </div>
    );
  }

  return <>{renderSidebar()}</>;
}

export default index;

//* Refatorar cada lista em um componente
