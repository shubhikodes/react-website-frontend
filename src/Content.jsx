import React from 'react';

const Content=(props)=>{
    return(
        <>
            <div className="left">
                <p className="heading">{props.heading}</p>
                <p className="names">{props.names}</p>
                <p className="subheading">{props.subheading}</p>
                <button className="btn">{props.btn}</button>
           </div>
           <div className="right">
                <img src={props.isrc} className="img"/>
           </div>
        </>
    )
}
export default Content;