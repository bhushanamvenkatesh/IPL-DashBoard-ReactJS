import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/KKR'

class TeamMatches extends Component {
  state = {teamMatches: {}}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getLatestMatchDetailsData = data1 => ({
    competingTeam: data1.competing_team,
    competingTeamLogo: data1.competing_team_logo,
    date: data1.date,
    firstInnings: data1.first_innings,
    id: data1.id,
    manOfTheMatch: data1.man_of_the_match,
    matchStatus: data1.match_status,
    result: data1.result,
    secondInnings: data1.second_innings,
    umpires: data1.umpires,
    venue: data1.venue,
  })

  getTeamMatchDetails = async () => {
    const response = await fetch(teamMatchesApiUrl)
    const data = await response.json()

    // const recentMatches = data.recent_matches

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getLatestMatchDetailsData(
        data.latest_match_details,
      ),
    }

    this.setState({teamMatches: formattedData})
    // console.log(this.state)
  }

  render() {
    const {teamMatches} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatches
    // console.log(latestMatchDetails)

    return (
      <div className="team-matches-container">
        <div className="banner-image-container">
          <img src={teamBannerUrl} alt="alt" className="team-banner-image" />
          <h1 className="latest-match-heading">Latest Matches</h1>
        </div>
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
