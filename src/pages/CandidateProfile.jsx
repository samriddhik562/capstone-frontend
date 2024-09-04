const CandidateProfile = () =>{
    return(<>
    <h1>Candidate Profile</h1>
    <div className='container'>
    <form>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" />
    <br />
        <label htmlFor="email">Email:</label>
        <input type="text" />
    <br/>
        <label htmlFor="address">Address:</label>
        <input type="text" />
    <br/>
        <label htmlFor="phone">Phone:</label>
        <input type="text" />
    <br/>
        <label htmlFor="resume">Resume:</label>
        <input type="text" />
    <br />
        <button className="button" type="submit">Submit Changes</button>
    </form>
    </div></>
    )
}

export default CandidateProfile;