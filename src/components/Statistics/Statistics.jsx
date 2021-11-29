import React from "react";
import "./Statistics.css";
import PropTypes from "prop-types";

function RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}

      <ul className="statList">
        {stats.map(({id, label, percentage}) => (
            <li className="itemStats" key={id} style={{ backgroundColor: RandomHexColor() }}>
              <span className="labelStats">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
