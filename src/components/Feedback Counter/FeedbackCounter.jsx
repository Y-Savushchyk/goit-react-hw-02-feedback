import React from "react";
import css from './FeedbackCounter.module.css'



class FeedbackCounter extends React.Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    addGoodFeedback=(e)=> {
        this.setState({
        good: this.state.good +1
    })
    }
addNeutralFeedback=(e)=> {
          this.setState({
        neutral: this.state.neutral +1
    })
}
    addBadFeedback=(e)=> {
          this.setState({
        bad: this.state.bad +1
          })
       
    }
     countTotalFeedback = () => {
         
        }
    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                <button className={css.button} type="button" onClick={this.addGoodFeedback}>Good</button>
                <button className={css.button} type="button" onClick={this.addNeutralFeedback}>Neutral</button>
                <button className={css.button} type="button" onClick={this.addBadFeedback}>Bad</button>
                <h2>Statistics</h2>
                <p>Good:<span>{this.state.good}</span></p>
                <p>Neutral:<span>{this.state.neutral}</span></p>
                <p>Bad:<span>{this.state.bad}</span></p>
                <p>Total:<span></span></p>
            </>
            
        )
    }
}

export default FeedbackCounter;