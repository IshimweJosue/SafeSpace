import React from 'react'
import './LeftDash.css';
import {Link} from "react-router-dom";
import home from '../../../../Resources/icons/ci_home-alt-outline.png'
import board from '../../../../Resources/icons/carbon_airline-rapid-board.png'
import safe from '../../../../Resources/icons/eos-icons_virtual-space.png'
import stories from '../../../../Resources/icons/bxs_book-alt.png'
import picture from '../../../../Resources/icons/ic_outline-change-circle.png'
import logout from '../../../../Resources/icons/clarity_logout-solid.png'


class LeftDash extends React.Component{
    render(){
        return<>


    <div className='LeftDash'>

        <div id='top'>
            <ul id='list'>
               
                <li class="list1" ><Link id='linklist' to = "/#about-us">Home</Link>
                <img id="homeLogo" src={home} alt="" /></li>
                <li class="list1" ><Link id='linklist' to = "/#about-us">Board Room</Link>
                <img id="boardLogo" src={board} alt="" /></li>
                <li class="list1" ><Link id='linklist' to = "/#about-us">Safe Room</Link>
                <img id="safeLogo" src={safe} alt="" /></li>
                <li class="list1" ><Link id='linklist' to = "/#about-us">My Stories</Link>
                <img id="storyLogo" src={stories} alt="" /></li>
                
            </ul>
        </div>

        <div id='centre'>
            <h1>People Followed</h1>
            
        </div>

        <div className='buttom'>
            <h1>MY ACCOUNT</h1>

            <ul id='listBottom'>
               
                <li class="list1" ><Link id='linklist' to = "/#about-us">Change Picture</Link>
                </li>
                <li class="list1" ><Link id='linklist' to = "/#about-us">Logout</Link>
               </li>
                {/* <img id="logout" src={logout} alt="" />
                <img id="picture" src={picture} alt="" /> */}
            </ul>
        </div>

        
   
    </div>


        </>

    }

}

export default LeftDash;