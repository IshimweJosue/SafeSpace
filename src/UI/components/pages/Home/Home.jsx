import React from 'react'
import Login from '../Login/Login';
import About from './About';
import AppFeatures from './AppFeatures';
import Footer from './Footer';
import Navbar from './Navbar'



class Home extends React.Component{
    render(){
        return <>
       
            <Navbar/>
            <Login/>
            <About/>
            <AppFeatures/>
            <Footer/>
            
        
            
            
            
        </>

    }

}
export default Home;