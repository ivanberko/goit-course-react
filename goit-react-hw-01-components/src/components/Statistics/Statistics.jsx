import React from "react";
import PropTypes from "prop-types";
import styles from "./statistics.module.css";

const getRandomColor = () => {
  let color = "#" + Math.random().toString(16).substr(-6);
  return color;
};

const Statistics = ({ title = "Upload stats", stats = [] }) =>
  !!stats.length && (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
