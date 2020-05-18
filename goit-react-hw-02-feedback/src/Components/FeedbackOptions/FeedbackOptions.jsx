import React from "react";
import PropTypes from "prop-types";
import { button } from "./Button.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button type="button" name="good" onClick={onLeaveFeedback} className={button}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback} className={button}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback} className={button}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
