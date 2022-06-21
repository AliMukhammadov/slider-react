import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [current, setCurrent] = useState(3);
  const { image, name, title, quote } = data[current];
  const sliderLength = data.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  useEffect(() => {
    setCurrent(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [current]);

  const auto = () => {
    slideInterval = setInterval(nextReview, intervalTime);
  };

  const prevReview = () => {
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
  };

  const nextReview = () => {
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
  };

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>
            Reviews
          </h2>
          <img className="person-img" src={image} alt={name} />
        </div>
        <div className="section-center">
          <article className="article">
            <h4>{name}</h4>
            <button className="prev" onClick={prevReview}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={nextReview}>
              <FiChevronRight />
            </button>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
