import React from 'react';
import Data from "./Data";
import Card from "./Card";

const Services=()=>{
    return(
        <>
            <div className="container">
                {                  
                    Data.map((val,index)=>{
                        return(
                            <Card img={val.isrc} title={val.title} body={val.body} btn={val.btn} key={val.id} id={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Services;

