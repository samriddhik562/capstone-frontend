import React, { useState, useEffect } from "react";
import * as API from '../Server.js'

export default function ApplicantList(){
const [applications, setApplications] = useState([]);

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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td><td>&nbsp;</td>
                        <td>Very Experienced</td><td>&nbsp;</td>
                        <td>2024-09-06</td><td>&nbsp;</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Cindy Loo</td><td>&nbsp;</td>
                        <td>Professionally Experienced</td><td>&nbsp;</td>
                        <td>2024-08-06</td><td>&nbsp;</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}