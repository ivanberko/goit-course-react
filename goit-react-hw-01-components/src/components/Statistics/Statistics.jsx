import React from "react";
import PropTypes from "prop-types";
import styles from "./statistics.module.css";
import { getRandomColor } from "../../helpers/getRandomColor";

const Statistics = ({ title = "Upload stats", stats = [] }) =>
  !!stats.length && (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(({id,label, percentage}) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
