import React from "react";
import PropTypes from "prop-types";
import style from "./profile.module.css";

const Description = ({ avatar, name, tag, location }) => (
  <div className={style.description}>
    <img src={avatar} alt=" avatar" className={style.avatar} />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>
);

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
