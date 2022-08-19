import React from 'react'
import './LeftProps.css'

const LeftProps=(props) =>{
  return (
    <div>
      <div className="profile">
        <img id='userimage' src={props.image} alt="" />
        <h6 className='userName'>{props.name} </h6>
        <img id='viewicon' src={image} alt="" >View More</img>
      </div>
    </div>
  )
}

export default LeftProps
