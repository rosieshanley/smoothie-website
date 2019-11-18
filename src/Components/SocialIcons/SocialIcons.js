import React from "react";
import "../../assets/styles/font-awesome.css";

const SocialIcons = () => (
  <div className="social">
    <ul className="social__icons">
      <li>
        <a
          href="https://www.facebook.com/smoothiemusic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/smoothie.music/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/talktosmoothie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          href="mailto:talktosmoothie@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default SocialIcons;
