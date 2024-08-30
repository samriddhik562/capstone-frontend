export const TalentList = props => {
    return ( 
        <div classsName="talentDiv">
            <table>
                <thread>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Job ID</th>
                        <th>Date Applied</th>
                        <th>Cover Letter</th>
                        <th>Resume</th>
                        <th>Application Status</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        props.talent.map(talent =>
                        (<tr key={talent.id} onClick={event => {props.onTalentClick(Talent)}}>
                            <td>talent.userID</td>
                            <td>talent.jobID</td>
                            <td>talent.dateApplied</td>
                            <td>talent.coverLetter</td>
                            <td>talent.resume</td>
                            <td>talent.applicationStatus</td>
                        </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}