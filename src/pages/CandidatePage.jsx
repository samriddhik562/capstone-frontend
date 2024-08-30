import { Link } from "react-router-dom"

export default function CandidatePage() {
    return (
      <div>
        <h1> Admin Dashboard </h1>
          <div className="container">
          <p>Welcome to Candidate Dashboard!</p>
          <p>Please click on the links below to perform the task you want:</p>
          <br/><ul>
          <li><Link to={'/searchjob'}>Search Job Openings</Link><br/></li>
          <li><Link to={'/applyjob'} >Apply to Job</Link><br/></li>
          <li><Link to={'/updateapplication'}>Update Application</Link><br/></li>
          <li><Link to={'/cancelapplication'}>Cancel Application</Link><br/></li>
          </ul></div>
      </div>
    )
}