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

      <ul className="stat-list">
        {stats
          .filter((stats, id) => id < 4)
          .map((stat) => (
            <li className="itemStats" key={stat.id} style={{ backgroundColor: RandomHexColor() }}>
              <span className="label-stats">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
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
