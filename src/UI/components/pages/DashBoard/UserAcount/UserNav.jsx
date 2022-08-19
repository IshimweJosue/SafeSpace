import React from 'react'
import './UserNav.css';
import {Link} from "react-router-dom";
import searchIcon from '../../../../Resources/icons/ei_search.png'
import discover from '../../../../Resources/icons/arcticons_discover.png'
import akarCircle from '../../../../Resources/icons/akar-icons_circle-alert.png'
import ellipse from '../../../../Resources/icons/Ellipse 13.png'

class UserNav extends React.Component{
    render(){
        return<>


{/* <div class="purple-gradient"></div> */}
    <h1  ><Link id="logo" to="/" ><span>s</span>Space</Link></h1>
    <nav className='dashNav'>
        <ul>
            <li><input type='email' name='email' placeholder='Search People, Stories' required id='email'></input>
            <img id='searchIcon'src={searchIcon} alt=""></img> </li>
            <li class="discover" ><Link to = "/#about-us">discover stories</Link>
            <img id="discoverLogo" src={discover} alt="" /></li>
            <li className='addStory'><Link to="/create" id="add-btn">add story</Link></li>

            <img id="akarLogo" src={akarCircle} alt="" />
            <img id="ellipse13" src={ellipse} alt="" />

            
        </ul>

        
        
    </nav>


        </>

    }

}

export default UserNav;