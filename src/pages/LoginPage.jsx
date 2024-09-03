const LoginPage = () =>{

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };
    
    return(
    <div className='container'>
    <h1>Sign In</h1>
    <form>
        <label htmlFor="usernameInput">Username:</label>
        <input 
            type="text"
            onChange={handleInputChange}
            value={user.username || ''}
        />
    <br/>
        <label htmlFor="password">Password:</label>
        <input 
            type="password" 
            onChange={handleInputChange}
            value={user.password || ''}
        />
    <br />
        <button type="submit">Login</button>
    </form>
    </div>
    )
}

export default LoginPage;