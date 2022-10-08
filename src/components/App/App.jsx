import React, { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = event => {
    const btnName = (event.target.textContent).toLowerCase();
    this.setState(prevState => ({ [btnName]: (prevState[btnName] + 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accum, item) => accum + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));;
  };


  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback(); //* 2-ой вариант
    
    const positivePercentage = this.countPositiveFeedbackPercentage(); 

    return (
      <div className={css.FeedBack}>

        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onIncrement}
          />
        </SectionTitle>

        
        <SectionTitle title="Statistics">
          {total
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
            :
            <NotificationMessage message="There is no feedback" />}
        </SectionTitle>
      </div>
    );
  }
}
