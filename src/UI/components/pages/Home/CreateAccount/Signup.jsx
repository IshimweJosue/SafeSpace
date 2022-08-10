import React from 'react'
import './Signup.css';
import safelogo from '../../../../Resources/images/image.png';



class Signup extends React.Component{
    render(){
        return<>


{/* Signup */}
<div className='signup-section'>
    <div className='signup-container'>
        <h2>To Enjoy All Our Features, Create Your Account Now</h2>
        <img src={safelogo} alt="" />
    </div>


 <div className='blue-green-gradient2'></div>
    <div className="sign-up-card">
        <div className='sign-up-info'>
            <h2>Create your account</h2>
            <form action="">
                <input type='name' name='name' placeholder='Name' required id='name' />
                <input type='age' name='age' placeholder='Age' required id='age' />
                <input type='email' name='email' placeholder='Email' required id='email' />
                {/* <input type='category' name='category' placeholder='User Category' required id='category' /> */}
                <select id="category">
                    
                    <option placeholder='User Category'>User Category</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <input type='password' name='password' placeholder='Password' required id='password' />
                <input type='age' name='age' placeholder='Confirm Password' required id='passwor2' />
                <button type='submit'>Continue To Your Account</button>
            </form>
         </div>        
    </div>
</div>



      </>     
    }
}

export default Signup;