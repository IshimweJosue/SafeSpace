import React from 'react'
import './App.css';
import Home from './UI/components/pages/Home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateAccount from './UI/components/pages/Home/CreateAccount/CreateAccount';
import ResetAccount from './UI/components/pages/Home/Reset/ResetAccount';
import About from './UI/components/pages/Home/About';
import AppFeatures from './UI/components/pages/Home/AppFeatures';
import MainUserAccount from './UI/components/pages/DashBoard/UserAcount/MainUserAccount';



    <title>SafeSpace</title>

class App extends React.Component{
  render(){
      return <>

          {/* <Home/> */}
            <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<CreateAccount/>}/>
                <Route path="/reset" element={<ResetAccount/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path='/features' element={<AppFeatures/>}/>
                <Route path='/login' element={<MainUserAccount/>}/>

             </Routes>
           </BrowserRouter> 
    
      </>

  }

}
export default App;