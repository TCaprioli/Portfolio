import React from 'react'

export default (props)=>{
    return(
    <>
    <h2 className='project-title'>{props.title}</h2>

    <h4>GitHub: <a href={props.gitFront} rel='noopener noreferrer' target='_blank'>Front-end</a> /
    <a href={props.gitBack} rel='noopener noreferrer' target='_blank'> Back-end</a></h4>
    <h4>Click here for <a href={props.demo} rel='noopener noreferrer' target='_blank'>Demo</a></h4>

    <img className='project-img' src={props.img} alt={props.imgAlt}/> 

    <p className='text-box'>{props.description}</p>
    <br/>
    <hr/>
    </>
    )
}