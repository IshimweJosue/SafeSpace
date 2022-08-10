import React from 'react'
import './UserNav.css';
import {Link} from "react-router-dom";
import searchIcon from '../../../../Resources/icons/ei_search.png'
 

class UserNav extends React.Component{
    render(){
        return<>


{/* <div class="purple-gradient"></div> */}
    <h1 id="logo"><span>s</span>Space</h1>
    <nav>
        <ul>
            <li><input type='email' name='email' placeholder='Search People, Stories' required id='email'></input> </li>
            <li><Link to="/" id="active">home</Link></li>
            <li><Link to = "/#about-us">about us</Link></li>
            <li><Link to = "/features">app features</Link></li>
            <li><Link to="/create" id="create-btn">create account</Link></li>
        </ul>
        <img id='searchIcon'src={searchIcon} alt=""></img>
    </nav>


        </>

    }

}

export default UserNav;