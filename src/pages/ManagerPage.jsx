import { Link } from "react-router-dom"

export default function ManagerPage() {
    return (
      <div>
        <h1> Manager Dashboard </h1>
          <div className="container">
          <p>Welcome to Manager Dashboard!</p>
          <p>Please click on the links below to perform the task you want:</p>
          <br/><ul>
          <li><Link to={'/editmprofile'}>Edit Profile</Link><br/></li> 
          <li><Link to={'/managejobs'}>Manage Job Openings</Link><br/></li>
          </ul></div>
      </div>
    )
}