// Write your code here
import {async} from 'rxjs'

import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    console.log('called')
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const formattedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsData: formattedData})
  }

  render() {
    const {teamsData} = this.state
    return (
      <div className="Home-component">
        <div className="logo-image-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list">
          {teamsData.map(eachItem => (
            <TeamCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
