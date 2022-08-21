// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link className="link-style" to={`/ipl/${id}`}>
      <li className="team-card-container">
        <div className="teamImage-name">
          <img src={teamImageUrl} alt="" className="team-image" />
          <h1>{name}</h1>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
