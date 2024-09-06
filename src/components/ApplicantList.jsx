import React, { useState, useEffect } from "react";
import * as API from '../Server.js'

export default function ApplicantList(){
const [applications, setApplications] = useState([]);
const [status1, setStatus1] = useState("Pending")
const [status2, setStatus2] = useState("Pending")
  /*useEffect(() => {
    const pullApplications = () => {
        API.getApplications(2, (err, data) => {
          if (err) { 
            setError('Fetching error');
            console.error(err);
          } else {
            setJobs(data);
          }
        });
      };
    pullJobs();
    }, []);*/


    return(
        <>
        <h1>Applicants</h1>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Applicant</th>
                        <th>&nbsp;</th>
                        <th>Resume</th>
                        <th>&nbsp;</th>
                        <th>Date Applied</th>
                        <th>&nbsp;</th>
                        <th>Status</th>
                        <th>&nbsp;</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td><td>&nbsp;</td>
                        <td>Very Experienced</td><td>&nbsp;</td>
                        <td>2024-09-06</td><td>&nbsp;</td>
                        <td>{status1}</td>
                        <td>
                            <button onClick={()=>setStatus1("Accept")}>Accept</button>
                            <button onClick={()=>setStatus1("Reject")}>Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Cindy Loo</td><td>&nbsp;</td>
                        <td>Professionally Experienced</td><td>&nbsp;</td>
                        <td>2024-08-06</td><td>&nbsp;</td>
                        <td>{status2}</td>
                        <td>
                        <button onClick={()=>setStatus2("Accept")}>Accept</button>
                            <button onClick={()=>setStatus2("Reject")}>Reject</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}