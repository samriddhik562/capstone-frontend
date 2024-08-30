import { Link } from "react-router-dom"

export default function AdminPage() {
    return (
      <div>
        <h1> Admin Dashboard </h1>
          <div className="container">
          <p>Welcome to Admin Dashboard!</p>
          <p>Please click on the links below to perform the task you want:</p>
          <br/><ul>
          <li><Link to={'/usermanagement'}>Manage Users</Link><br/></li>
          <li><Link to={'/managejobs'} >Manage Job Openings</Link><br/></li>
          <li><Link to={'/manageapplications'}>Manage Applications</Link><br/></li>
          </ul></div>
      </div>
    )
}