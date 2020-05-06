import React from "react";
import PropTypes from "prop-types";

const Description = ({ avatar, name, tag, location }) => (
  <div className="description">
    <img src={avatar} alt=" avatar" className="avatar" />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
);

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
