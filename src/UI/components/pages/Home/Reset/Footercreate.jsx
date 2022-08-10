import React from 'react'
import './Footercreate.css';
import safelogo from '../../../../Resources/images/image.png';




class Footercreate extends React.Component{
    render(){
        return<>
 <div class="footer2">
        <div class="footer-content">
            <a href="./Home.jsx"><img src={safelogo} alt=""/></a>

            <div class="social-media-links">
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>   
            </div>

            <div class="company">
                <h1>solvitAfrica</h1>
            </div>   
        </div>

        <div class="copyright">
            <span>Team one-all rights reserved</span>
        </div>
        
    </div>

      </>     
    }
}
export default Footercreate;