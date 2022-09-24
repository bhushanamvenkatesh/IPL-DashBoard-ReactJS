// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props

  const {competingTeam, competingTeamLogo, matchStatus, result} = eachItem

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
