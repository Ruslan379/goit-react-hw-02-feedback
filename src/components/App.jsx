import React, { Component } from 'react';





export class App extends Component {
  
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,

    initialTotalFeedback: 0,
    initialPositiveFeedback: 0,

  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,

    // totalFeedback: this.props.initialTotalFeedback,
    // positiveFeedback: this.props.initialPositiveFeedback,
  };

  feedBack = {
    totalFeedback: this.props.initialTotalFeedback,
    positiveFeedback: this.props.initialPositiveFeedback,
  }


  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };



  countTotalFeedback = (a, b, c) => {
    // console.log("a: ", a); //!
    // console.log("b: ", b); //!
    // console.log("c: ", c); //!
    return a + b + c
  };

  countPositiveFeedbackPercentage = (totalFeedback, good) => {
    console.log("totalFeedback: ", totalFeedback); //!
    console.log("good: ", good); //!
    return (good*100)/totalFeedback
  };



  render() {
    const { good, neutral, bad } = this.state;
    
    // console.log("good: ", good); //!
    // console.log("neutral: ", neutral); //!
    // console.log("bad: ", bad); //!

    this.feedBack.totalFeedback = this.countTotalFeedback(good, neutral, bad);
    
    const { totalFeedback } = this.feedBack;

    this.feedBack.positiveFeedback = this.countPositiveFeedbackPercentage(totalFeedback, good);

    const { positiveFeedback } = this.feedBack;

    console.log("totalFeedback: ", totalFeedback); //!
    console.log("positiveFeedback: ", positiveFeedback); //!

    // const totalFeedback1 = this.countTotalFeedback(good, neutral, bad);
    
      
    return (
        
        <div className="FeedBack">
          <h1>Please leave feedback</h1>

          <button type="button" onClick={this.goodIncrement}>Good</button>
          <button type="button" onClick={this.neutralIncrement}>Neutral</button>
          <button type="button" onClick={this.badIncrement}>Bad</button>

          <h1>Statistics</h1>

          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
        
          {/* <p>Total: {totalFeedback1}</p> */}
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedback}%</p>
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
