const ManagerProfile = () =>{
    return(<>
    <h1>Manager Profile</h1>
    <div className='container'>
    <form>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" />
    <br />
        <label htmlFor="email">Email:</label>
        <input type="text" />
    <br/>
        <label htmlFor="department">Department:</label>
        <input type="text" />
    <br/>
        <label htmlFor="phone">Phone:</label>
        <input type="text" />
    <br/>
        <button className="button" type="submit">Submit Changes</button>
    </form>
    </div></>
    )
}

export default ManagerProfile;