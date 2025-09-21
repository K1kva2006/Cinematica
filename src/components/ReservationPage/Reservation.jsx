import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import nowShowingFilmsData from "../../data/now showing films.js";
import popularFilmsData from "../../data/popular films.js";

import leftArrowIcon from "../../assets/images/movieDetails-page/arrow-left-icon.svg";

export default function Reservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentMovie, setCurrentMovie] = useState("");
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const films = [...nowShowingFilmsData, ...popularFilmsData];
    for (let i = 0; i < films.length; i++) {
      if (films[i].id == id) setCurrentMovie(films[i]);
    }
  }, [id]);

  const [currentMonthDays, setCurrentMonthDays] = useState([]);
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({
        day: day,
        weekday: date.toLocaleString("en-US", { weekday: "short" }),
      });
    }

    setCurrentMonthDays(days);
  }, []);

  return (
    <div className="reservePagesContainer">
      <img
        src={leftArrowIcon}
        alt="left arrow icon"
        onClick={() => navigate(`/movie/${currentMovie.id}/details`)}
      />

      <div className="reservePagesImageContainer">
        <img
          src={currentMovie.image}
          alt={currentMovie.name}
          className="reservePagesImage"
        />
        <div>
          <h2>{currentMovie.name}</h2>
        </div>
      </div>

      <h2>Select Date</h2>
      <div className="dateContainer" ref={containerRef}>
        {currentMonthDays.map((item, index) => (
          <div
            key={index}
            className="dateItem"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: hoveredIndex === index ? "yellow" : undefined,
              transform: hoveredIndex === index ? "translateY(-10px)" : undefined,
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
          >
            <h3>{item.weekday}</h3>
            <h4>{item.day}</h4>
          </div>
        ))}
      </div>

      <div className="mainButtonContainer">
        <button
          className="mainButton"
          onClick={() => navigate(`/movie/${currentMovie.id}/buyticket`)}
        >
          Reservation
        </button>
      </div>
    </div>
  );
}
