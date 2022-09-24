// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <div className="teamImage-name">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p>{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
