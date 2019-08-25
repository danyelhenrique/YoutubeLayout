import React from "react";

import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
import { MdReply } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import "./index.css";

export default function index() {
  return (
    <div className="video-component-items">
      <h1>Title video</h1>
      <span>311.824 visualizations</span>
      <div className="video-component-items-content">
        <div className="likeOrDislike">
          <a href="#/" className="like">
            <MdThumbUp></MdThumbUp> <span>795</span>
          </a>
          <a href="#/" className="dislike">
            <MdThumbDown></MdThumbDown> <span>29</span>
          </a>
        </div>
        <div className="video-share-add">
          <a href="#/" className="share">
            <MdReply></MdReply> <span>share</span>
          </a>
          <a href="#/" className="playlistAdd">
            <MdPlaylistAdd></MdPlaylistAdd> <span>Save</span>
          </a>
        </div>
      </div>
    </div>
  );
}
