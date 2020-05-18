import React, { Component } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import { main } from "./App.module.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (this.countTotalFeedback()) {
      return `${Math.round((good / this.countTotalFeedback()) * 100)}%`;
    } else {
      return `0%`;
    }
  }

  onLeaveFeedback = (e) => {
    const targetName = e.target.name;
    this.countTotalFeedback();
    this.setState((prevState) => {
      return {
        [targetName]: prevState[targetName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <main className={main}>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </main>
    );
  }
}
