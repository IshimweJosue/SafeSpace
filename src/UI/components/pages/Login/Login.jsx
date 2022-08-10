import React from 'react'
import './Login.css';
import safelogo from '../../../Resources/images/image.png';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return<>

<div className='login-section'>
    <div className='welcome-container'>
        <h2>Welcome to</h2>
        <img src={safelogo} alt="" />
    </div>

<div className='green-gradient'></div>

    <div className="sign-in-card">
        <div className='sign-in-info'>
            <h2>Sign in</h2>
            <form action="">
                <input type='email' name='email' placeholder='Email' required id='email' />
                <input type='password' name='password' placeholder='Password' required id='password' />
                <p>Forgot your password?<Link to='/reset'>Reset it here</Link></p>
                <Link to='/login'> <button type='submit'>login</button></Link>
            </form>
         </div>        
    </div>
</div>
      </>     
    }
}
export default Login;