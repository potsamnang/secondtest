import React from "react";
import "./poster.css";
const Poster = ({ produce: { img, name, detail, price } }) => {
  return (
    <div className="container">
      <article>
        <div className="card">
          <img src={img} alt="profile" />
          <h3>{name}</h3>
          <p>{detail}</p>
          <span>{price}</span>
        </div>
      </article>
    </div>
  );
};

export default Poster;
