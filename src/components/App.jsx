import React, { Component } from 'react';





export class App extends Component {
  
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,

    initialTotalFeedback: 0,
    initialPositivePercentage: 0,

  };


  static propTypes = {
    //
  };



  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,

    // total: this.props.initialTotalFeedback,
    // positivePercentage: this.props.initialPositivePercentage,
  };

  //! Дополнительная статистика feedBack
  feedBack = {
    total: this.props.initialTotalFeedback,
    positivePercentage: this.props.initialPositivePercentage,
  }


  //! good
  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  //! neutral
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  //! bad
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };


  //! Отображение общего количества собранных отзывов из всех категорий:
  countTotalFeedback = (good, neutral, bad) => {
    // console.log("good: ", good); //!
    // console.log("neutral: ", neutral); //!
    // console.log("bad: ", bad); //!
    return (good + neutral + bad);
  };

  //! Процент положительных отзывов:
  countPositiveFeedbackPercentage = (total, good) => {
    // console.log("total: ", total); //!
    // console.log("good: ", good); //!

    let percentage = (good * 100) / total;
    // console.log("percentage: ", percentage); //!
    // console.log(isNaN(percentage)); //!

    if (isNaN(percentage)) percentage = 0;
    // isNaN(percentage) ? percentage = 0 : percentage = (good * 100) / total;

    return (percentage).toFixed(0);
  };



  render() {
    const { good, neutral, bad } = this.state;
    // console.log("good: ", good); //!
    // console.log("neutral: ", neutral); //!
    // console.log("bad: ", bad); //!

    this.feedBack.total = this.countTotalFeedback(good, neutral, bad);
    // const totalFeedback1 = this.countTotalFeedback(good, neutral, bad); //! 2-ой вариант, более простой, без feedBack {}
    
    const { total } = this.feedBack;

    this.feedBack.positivePercentage = this.countPositiveFeedbackPercentage(total, good);
    // const positivePercentage1 = this.countPositiveFeedbackPercentage(totalFeedback1, good); //! 2-ой вариант, более простой, без feedBack {}

    const { positivePercentage } = this.feedBack;

    // console.log("total: ", total); //!
    // console.log("positivePercentage: ", positivePercentage); //!

    return (
        <div className="FeedBack">
          <h1>Please leave feedback</h1>

          <button type="button" onClick={this.goodIncrement}>Good</button>
          <button type="button" onClick={this.neutralIncrement}>Neutral</button>
          <button type="button" onClick={this.badIncrement}>Bad</button>

          <h1>Statistics</h1>

          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
  }
}












//! OLD ========================================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 80,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
