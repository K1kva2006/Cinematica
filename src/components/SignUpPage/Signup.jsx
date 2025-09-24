import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/images/movieDetails-page/arrow-left-icon.svg";

export default function Signup() {
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
            <h2>Sing up</h2>
          </div>

          <div className="loginPageSecondContainerDiv2">
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
          </div>

          <div
            style={{
              marginBottom: "65px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button style={{ marginTop: "40px" }} className="mainButton">
              Log in{" "}
            </button>
          </div>
        </div>

        <div>
          <div className="loginPageLoginSignupContainer">
            <h3>Already have an account? </h3>
            <Link to={"/login"}>Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
