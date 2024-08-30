const LoginPage = () =>{
    return(
    <div className='container'>
    <h1>Sign In</h1>
    <form>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" />
    <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" />
    <br />
        <button type="submit">Login</button>
    </form>
    </div>
    )
}

export default LoginPage;