import React from 'react'
import './Reset.css';
import safelogo from '../../../../Resources/images/image.png';



class Reset extends React.Component{
    render(){
        return<>


{/* Signup */}
<div className='reset-section'>
    <div className='reset-container'>
        <h2>if you forgot your password, create a new one</h2>
        <img src={safelogo} alt="" />
    </div>


 <div className='blue-green-gradient2'></div>
    <div className="reset-card">
        <div className='reset-info'>
            <h2>Reset your Password</h2>
            <form action="">
                <input type='email' name='email' placeholder='Email' required id='email' />
                <input type='sent' name='sent' placeholder='Code sent to your email' required id='sent' />
                <input type='password' name='password' placeholder='New Password' required id='password' />
                <input type='pass' name='pass' placeholder='Confirm Password' required id='passwor2' />
                <button type='submit'>Finish</button>
            </form>
         </div>        
    </div>
</div>



      </>     
    }
}

export default Reset;