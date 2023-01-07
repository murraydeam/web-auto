import { Slide } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header className="secondary section">
      <div className="header-content">
        <h1>Welcome</h1>

        <h3>
          After spending some time with the Android Auto interface I feel it is
          missing a major feature
        </h3>
        <h1>Color Schemes!</h1>
        <a href="#main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="80px"
            viewBox="0 0 24 24"
            width="80px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41" />
                <polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19" />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
