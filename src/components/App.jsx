import React, { Component } from 'react';





export class App extends Component {
  
 

  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,

    initialTotalFeedback: 0,
    initialPositiveFeedbackPercentage: 0,

  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  feedBack = {
    totalFeedback: this.props.initialTotalFeedback,
    positiveFeedbackPercentage: this.props.initialPositiveFeedbackPercentage,
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

  countTotalFeedback = () => {
    this.setState(prevState => (
      this.totalFeedback = prevState.good + prevState.neutral + prevState.bad
      
    ));
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.totalFeedback);

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
        
          <p>Total: {this.countTotalFeedback}</p>
          {/* <p>Positive feedback: {completedTodoCount}</p> */}
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
