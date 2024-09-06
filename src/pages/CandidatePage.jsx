import { Link } from "react-router-dom"

export default function CandidatePage() {
    return (
      <div>
        <h1> Candidate Dashboard </h1>
          <div className="container">
          <p>Welcome to Candidate Dashboard!</p>
          <p>Please click on the links below to perform the task you want:</p>
          <br/><ul>
          <li><Link to={'/editcprofile'} >Edit Profile</Link><br/></li>
          <li><Link to={'/jobs'} >Apply to Job</Link><br/></li>
          <li><Link to={'/jobs'} >View Applications</Link><br/></li>
          </ul></div>
      </div>
    )
}