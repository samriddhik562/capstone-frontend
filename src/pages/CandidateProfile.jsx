const CandidateProfile = () =>{
    return(<>
    <h1>Candidate Profile</h1>
    <div className='container'>
    <form>
        <label htmlFor="username">Username:</label>
        <input type="text" />
    <br/>
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
        <button className="button" type="submit">Login</button>
    </form>
    </div></>
    )
}

export default CandidateProfile;