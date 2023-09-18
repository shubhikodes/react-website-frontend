import React from 'react';

const Card =(props)=>{
    return(
        <>
            <div className="card">
                <img className="cimg" src={props.img}></img>
                <div className="ctitle">{props.title}</div>
                <div className="cbody">{props.body}</div>
                <button className="cbtn">{props.btn}</button>
            </div>
        </>
    )
}
export default Card;