import { Link } from "react-router-dom"

export default function AdminPage() {
    const text = `
    This "Administrator's Dashboard" page needs to be developed!
  
    This page should include:
    - Link to the "User Management Page" to manage login accounts 
    - Links to similar CRUD pages for direct editing of database table contents
    - List of application tables and rowcounts
    `;
    return (
      <div>
          <div className="content">
          <pre>{text}</pre>
          Links:<br/>
          <Link to={'/usermanagement'}>Manage Users</Link><br/>
          <Link to={'/managejobs'} >Manage Job Openings</Link><br/>
          <Link to={'/manageapplications'}>Manage Applications</Link><br/>
          ...
          </div>
      </div>
    )
}