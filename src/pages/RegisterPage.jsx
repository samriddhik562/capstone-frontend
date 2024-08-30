const RegisterPage = () =>{
    return(
    <div className='container'>
    <h1>Register Here</h1>
    <form>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" />
    <br/>
    <label htmlFor="username">Username:</label>
        <input type="text" />
    <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" />
    <br />
        <button type="submit">Register</button>
    </form>
    </div>
    )
}

export default RegisterPage;