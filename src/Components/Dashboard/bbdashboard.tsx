export const Dashboard = () => {
  return (
    <div>
      <div className="questionicon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="2 0 12 1"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 2.66668C5.05448 2.66668 2.66667 5.05449 2.66667 8.00001C2.66667 10.9455 5.05448 13.3333 8 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 8.00001C13.3333 5.05449 10.9455 2.66668 8 2.66668ZM1.33333 8.00001C1.33333 4.31811 4.3181 1.33334 8 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00001Z"
            fill="#617177"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 10.6667C8.36819 10.6667 8.66667 10.9652 8.66667 11.3333V11.34C8.66667 11.7082 8.36819 12.0067 8 12.0067C7.63181 12.0067 7.33333 11.7082 7.33333 11.34V11.3333C7.33333 10.9652 7.63181 10.6667 8 10.6667Z"
            fill="#617177"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.98317 4.22995C7.3161 4.06521 7.68274 3.98 8.0542 3.98103C8.42566 3.98206 8.79181 4.0693 9.12383 4.23589C9.45585 4.40247 9.74466 4.64385 9.96754 4.94102C10.1904 5.23819 10.3413 5.58304 10.4082 5.94842C10.4752 6.3138 10.4564 6.68973 10.3534 7.04663C10.2504 7.40352 10.0659 7.73163 9.81455 8.00512C9.56318 8.27861 9.25175 8.49002 8.90479 8.6227C8.89916 8.62485 8.8935 8.62693 8.88782 8.62893C8.81965 8.6529 8.76112 8.69837 8.72104 8.75849C8.68096 8.8186 8.6615 8.89012 8.6656 8.96226C8.68645 9.32986 8.40535 9.64476 8.03775 9.66561C7.67015 9.68646 7.35525 9.40536 7.3344 9.03776C7.31394 8.67706 7.41124 8.31949 7.61164 8.01888C7.80996 7.7214 8.09863 7.49567 8.43492 7.37486C8.58656 7.31575 8.7227 7.22271 8.83288 7.10284C8.9446 6.98129 9.02658 6.83546 9.07237 6.67685C9.11815 6.51823 9.1265 6.35114 9.09674 6.18875C9.06698 6.02636 8.99993 5.8731 8.90088 5.74102C8.80182 5.60894 8.67345 5.50166 8.52589 5.42763C8.37833 5.35359 8.21559 5.31482 8.0505 5.31436C7.88541 5.3139 7.72246 5.35177 7.57449 5.42499C7.42652 5.49821 7.29756 5.60477 7.19777 5.7363C6.97523 6.02962 6.55704 6.08699 6.26371 5.86445C5.97039 5.64191 5.91301 5.22371 6.13556 4.93039C6.36008 4.63446 6.65023 4.39469 6.98317 4.22995Z"
            fill="#617177"
          />
        </svg>
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

      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
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
      <div className="greeting">Hello, Ben Van Loovere</div>

      <line className="line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1574"
          height="2"
          viewBox="0 0 1430 2"
          fill="none"
        >
          <path d="M1 1H1573" stroke="#BAC1C4" stroke-linecap="round" />
        </svg>
      </line>
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
