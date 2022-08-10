import React from 'react'
import './Navbar2.css';
import {Link} from "react-router-dom";
// import logo from '../../../Resources/images/logoTop.svg'

class Navbar2 extends React.Component{
    render(){
        return<>


{/* <div class="purple-gradient"></div> */}
    <h1 id="logo"><span>s</span>Space</h1>
    <nav>
        <ul>
            <li><Link to="/" id="active">home</Link></li>
            <li><Link to = "/#about-us">about us</Link></li>
            <li><Link to = "/features">app features</Link></li>
            <li><Link to="/create" id="create-btn">create account</Link></li>
        </ul>
    </nav>


        </>

    }

}

export default Navbar2;