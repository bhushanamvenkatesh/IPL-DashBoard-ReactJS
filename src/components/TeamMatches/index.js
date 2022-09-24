import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {data: {}, isloading: true}

  componentDidMount() {
    this.getData()
  }

  getLatestMatchDetails = matchDetails => {
    const formattedMatchDetails = {
      competingTeam: matchDetails.competing_team,
      competingTeamLogo: matchDetails.competing_team_logo,
      date: matchDetails.date,
      firstInnings: matchDetails.first_innings,
      id: matchDetails.id,
      manOfTheMatch: matchDetails.man_of_the_match,
      matchStatus: matchDetails.match_status,
      result: matchDetails.result,
      secondInnings: matchDetails.second_innings,
      umpires: matchDetails.umpires,
      venue: matchDetails.venue,
    }
    return formattedMatchDetails
  }

  getRecentMatches = data => {
    const recentMatches = data.map(data1 => ({
      competingTeam: data1.competing_team,
      competingTeamLogo: data1.competing_team_logo,
      matchStatus: data1.match_status,
      result: data1.result,
      id: data1.id,
    }))

    return recentMatches
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getLatestMatchDetails(data.latest_match_details),
      recentMatches: this.getRecentMatches(data.recent_matches),
    }

    this.setState({data: formattedData, isloading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" height={50} width={50} />
    </div>
  )

  renderPage = () => {
    const {data} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = data
    console.log(recentMatches)
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="list">
          {recentMatches.map(eachItem => (
            <MatchCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isloading} = this.state
    return <div>{isloading ? this.renderLoader() : this.renderPage()}</div>
  }
}

export default TeamMatches
