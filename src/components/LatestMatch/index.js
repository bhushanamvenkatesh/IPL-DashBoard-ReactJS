// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  state = {details: {}}

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {details} = this.state
    const {competingTeam} = details
    return (
      <div className="latest-match-container">
        <h1 className="latest-match-heading">{competingTeam}</h1>
      </div>
    )
  }
}

export default LatestMatch
