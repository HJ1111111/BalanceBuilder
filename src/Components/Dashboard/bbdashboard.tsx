import React from "react";
import Questionicon from "../../iconComponents/question";
import Wave from "../../iconComponents/wave";
import Search from "../../iconComponents/search";
import { useState } from "react";



export const Dashboard = () => {
  const [query, setQuery] = useState("")

  return (
    <section>

      <div className="wave">
        <Wave />
      </div>
      <text className="greeting">Hello, Ben Van Loovere</text>
         
      <input className="searchbox"  placeholder="Search for assets by name - you’ll be redirected to the diagram view" onChange={event => setQuery(event.target.value)} />

<<<<<<< HEAD
      <div className="questioniconstyle">
        <Questionicon />
      </div>
=======
      <input className="searchbox" placeholder="Search for assets by name - you’ll be redirected to the diagram view" onChange={event => setQuery(event.target.value)} />
>>>>>>> 5463b671a469126568a8a6908d07010295c562de

      <div className="questioniconstyle">
        <Questionicon />
      </div>
      
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
    </section>
  );
};
