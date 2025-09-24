import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/LandingPage/Landing.jsx";
import Login from "./components/LoginPage/Login.jsx";
import Signup from "./components/SignUpPage/Signup.jsx";
import Resetpassword from "./components/ResetPasswordPage/Resetpassword.jsx";
import Home from "./components/HomePage/Home.jsx";
import MovieDetails from "./components/MovieDetailsPage/MovieDetails.jsx";
import Reservation from "./components/ReservationPage/Reservation.jsx";
import BuyTicket from "./components/BuyTicketPage/BuyTicket.jsx";
import Payement from "./components/PayementsPage/Payement.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />}/> 
          <Route path="/singup" element={<Signup />}/>
          <Route path="resetpassword" element={<Resetpassword/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id/details" element={<MovieDetails />} />
          <Route path="/movie/:id/reservation" element={<Reservation/>}/>
          <Route path="/movie/:id/buyticket" element={<BuyTicket/>}/>
          <Route path="/movie/:id/payement" element={<Payement/>}/>
          <Route path="*" element={<>meow</>} />
        </Routes>
      </Router>
    </>
  );
}
