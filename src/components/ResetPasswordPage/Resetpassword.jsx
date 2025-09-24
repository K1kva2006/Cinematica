import React from "react"

import { Link, useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/images/movieDetails-page/arrow-left-icon.svg";

export default function Resetpassword() {
  const navigate = useNavigate();
  return (
    <>
      <div className="loginSignupPageContainer">
        <div className="loginPageSecondContainer">
          <div className="loginPageSecondContainerDiv1">
            <img
              src={arrowLeftIcon}
              alt="arrow icon"
              onClick={() => navigate("/login")}
            />
            <center style={{marginLeft: "50px",}}><h2 style={{color: "white"}}>Forgot password?</h2></center>
          </div>

          <div className="loginPageSecondContainerDiv2">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
          </div>

          <div
            style={{
              marginBottom: "65px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button style={{ marginTop: "40px" }} className="mainButton">
              Next{" "}
            </button>
          </div>
        </div>

        <div>
          <div className="loginPageLoginSignupContainer">
            <h3>Reset with number</h3>
          </div>
        </div>
      </div>
    </>
  );
}
