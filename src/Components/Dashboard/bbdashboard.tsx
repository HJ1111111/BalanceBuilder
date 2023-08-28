import React from "react";
import Questionicon from "../../iconComponents/question";

export const Dashboard = () => {
  return (
    <div>
      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="100"
          viewBox="0 -27 20 19"
          fill="none"
        >
          <path
            d="M8.29165 7.37504L12.3542 3.31251C12.5697 3.09702 12.8619 2.97596 13.1667 2.97596C13.4714 2.97596 13.7637 3.09702 13.9792 3.31251C14.1947 3.528 14.3157 3.82026 14.3157 4.12501C14.3157 4.42976 14.1947 4.72203 13.9792 4.93752L11.4583 7.45838"
            stroke="#171F22"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9792 4.9376L15.0626 3.85425C15.1693 3.74755 15.2959 3.66292 15.4353 3.60517C15.5747 3.54742 15.7242 3.5177 15.8751 3.5177C16.026 3.5177 16.1754 3.54742 16.3148 3.60517C16.4542 3.66292 16.5809 3.74755 16.6876 3.85425C16.7943 3.96095 16.8789 4.08763 16.9367 4.22704C16.9944 4.36645 17.0241 4.51586 17.0241 4.66676C17.0241 4.81766 16.9944 4.96708 16.9367 5.10649C16.8789 5.2459 16.7943 5.37257 16.6876 5.47927L13.0834 9.08347"
            stroke="#171F22"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6042 6.56251C15.8197 6.34702 16.1119 6.22596 16.4167 6.22596C16.7214 6.22596 17.0137 6.34702 17.2292 6.56251C17.4447 6.778 17.5657 7.07026 17.5657 7.37501C17.5657 7.67976 17.4447 7.97203 17.2292 8.18752L14.7083 10.7084"
            stroke="#171F22"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.1459 9.271C16.3614 9.05551 16.6536 8.93445 16.9584 8.93445C17.2631 8.93445 17.5554 9.05551 17.7709 9.271C17.9864 9.48649 18.1074 9.77875 18.1074 10.0835C18.1074 10.3883 17.9864 10.6805 17.7709 10.896L13.1667 15.5002C12.3047 16.3622 11.1356 16.8464 9.91665 16.8464C8.69765 16.8464 7.52858 16.3622 6.66662 15.5002L5.58328 14.4169L5.69595 14.5295C5.15762 13.9914 4.76137 13.328 4.54278 12.5988C4.3242 11.8697 4.29012 11.0977 4.4436 10.3522C4.46215 10.2626 4.48093 10.173 4.49994 10.0835C4.5904 9.65504 5.03132 8.02786 5.8227 5.20088C5.90336 4.9127 6.09327 4.66736 6.35203 4.51704C6.6108 4.36672 6.91799 4.32328 7.20829 4.39596C7.51759 4.47328 7.79219 4.65173 7.98847 4.90297C8.18475 5.1542 8.29145 5.46382 8.29163 5.78264L8.29163 7.37515"
            stroke="#171F22"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.22 17.5C17.2358 17.0602 18.0562 16.2565 18.5 15.25M5.7 1.5C4.73821 1.91637 3.95724 2.66742 3.5 3.6"
            stroke="#171F22"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="questioniconstyle">
        {" "}
        <Questionicon />
      </div>
      <div className="searchbox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="1 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.33335 3.33332C5.57193 3.33332 3.33335 5.5719 3.33335 8.33332C3.33335 11.0947 5.57193 13.3333 8.33335 13.3333C11.0948 13.3333 13.3334 11.0947 13.3334 8.33332C13.3334 5.5719 11.0948 3.33332 8.33335 3.33332ZM1.66669 8.33332C1.66669 4.65143 4.65146 1.66666 8.33335 1.66666C12.0153 1.66666 15 4.65143 15 8.33332C15 9.87392 14.4775 11.2925 13.5999 12.4214L18.0893 16.9107C18.4147 17.2362 18.4147 17.7638 18.0893 18.0892C17.7638 18.4147 17.2362 18.4147 16.9108 18.0892L12.4214 13.5999C11.2925 14.4774 9.87395 15 8.33335 15C4.65146 15 1.66669 12.0152 1.66669 8.33332Z"
            fill="#617177"
          />
        </svg>
        Search for assets by name - you’ll be redirected to the diagram view
      </div>
      <p className="greeting">Hello, Ben Van Loovere</p>
      <hr className="line"></hr>

      <div className="header">
        <p className="qstext">Quick select</p>
        <p className="paragraph">
          By default you’ll only get result from your zone - turn it off and
          you’ll see all zones
        </p>
        <div className="ptext">
          <div className="switchbutton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <g filter="url(#filter0_dd_3928_364)">
                <circle cx="11" cy="10" r="8" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_dd_3928_364"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0431373 0 0 0 0 0.0588235 0 0 0 0 0.0666667 0 0 0 0.06 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3928_364"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0431373 0 0 0 0 0.0588235 0 0 0 0 0.0666667 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_3928_364"
                    result="effect2_dropShadow_3928_364"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_3928_364"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          &nbsp; &nbsp; &nbsp;
          <p className="paragraph2">Search only my zones & regions</p>
        </div>
        <div className="ztext">
          <p className="paragraph3">Select a zone</p>
          <section className="zones">
            <label className="badge1">
              <p className="badge1text">Zone S</p>
            </label>
            <label className="badge2">
              <p className="badge2text">Zone 1</p>
            </label>
            <label className="badge3">
              <p className="badge3text">Zone N</p>
            </label>
            <label className="badge4">
              <p className="badge4text">Zone L</p>
            </label>
          </section>
        </div>
      </div>
    </div>
  );
};
