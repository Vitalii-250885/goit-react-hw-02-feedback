import React from 'react'
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Wrapper } from './App.styled'
import { Notification } from './Notification/Notification'

export class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
      visible: false,
  }

   selectFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
        [name]: prevState[name] + 1,
    }))
    this.setState({visible: true,})
  }


  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      return Math.floor(good / (good + neutral + bad) * 100)
  }

  render() {
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.selectFeedback} />
        </Section>

        {this.state.visible && (
          <Section title="Statistics">
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
        )}
        
        {this.state.visible || (<Notification message="There is no feedback" />)}
        
      </Wrapper>
    );
  }
}
