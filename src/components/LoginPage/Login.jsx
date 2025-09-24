import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/images/movieDetails-page/arrow-left-icon.svg";
import facebookIcon from "../../assets/images/login-page/facebook.svg";
import googleIcon from "../../assets/images/login-page/google.svg";
import appleIcon from "../../assets/images/login-page/apple.svg";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="loginSignupPageContainer">
        <div className="loginPageSecondContainer">
          <div className="loginPageSecondContainerDiv1">
            <img
              src={arrowLeftIcon}
              alt="arrow icon"
              onClick={() => navigate("/")}
            />
            <h2>Log in</h2>
          </div>

          <div className="loginPageSecondContainerDiv2">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
          </div>

          <div className="loginPageSecondContainerDiv3">
            <div style={{ display: "flex", gap: "5px" }}>
              <input type="checkbox" />
              <span style={{ color: "white" }}>Remember me</span>
            </div>

            <h3
              style={{ fontWeight: "lighter", cursor: "pointer" }}
              onClick={() => navigate("/resetpassword")}
            >
              Forgot password ?
            </h3>
          </div>

          <div
            style={{
              marginBottom: "65px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="mainButton" onClick={() => navigate("/home")}>Log in </button>
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: "center", color: "#FFFFFF" }}>
            Or sign in with
          </h3>
          <div className="loginPageLoginIconsContainer">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={googleIcon} alt="google icon" />
            <img src={appleIcon} alt="apple icon" />
          </div>

          <div className="loginPageLoginSignupContainer">
            <h3>Don’t have an account? </h3>
            <Link to={"/singup"}>Sing up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
