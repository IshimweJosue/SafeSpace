import React from 'react'
import './AppFeatures.css';


class AppFeatures extends React.Component{
    render(){
        return<>


<div className='app-features'>

    <div className='blue-green-gradient'>


    </div>
        <div className='app-features-header'>
                <h1>our <span>app</span> features</h1>
        </div>

                <div className='cards-grid'>
                    <div className='card card-one'>
                        <div className='card-content'>
                            <h1>board room</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores minima, blanditiis ullam id culpa necessitatibus aliquam expedita eligendi minus labore.</p>
                        </div>  
                    </div>

                    <div  className='card card-two'>
                        <div className='card-content'>
                            <h1>safe room</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis placeat rem ea voluptatibus qui atque illum soluta eos quod.</p>
                        </div> 
                    </div>
                    <div className='card card-three'>
                        <div className='card-content'>
                            <h1>board room</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate odit dignissimos pariatur dolor cumque. Eos optio possimus reiciendis repudiandae! Ipsa.</p>
                        </div> 
                    </div>
                    <div className='card card-four'>
                        <div className='card-content'>
                            <h1>safe room</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quidem in mollitia adipisci omnis autem? Non velit nesciunt dolore itaque.</p>
                        </div> 
                    </div>
                </div>
    
</div>

                                   

        </>

    }

}
export default AppFeatures;