import React from 'react';
import Content from "./Content";

const Home =()=>{
    return(
        <>
           <div className="home">
                <Content heading="Grow your business with"
                names="Thoughtful Technical"
                subheading="We are a team of talented developers making websites"
                btn="Get Started"
                isrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67vejyHX17Yj8C7VvaV5hpY6LP9XHTRY5RoQEuKdWl40qCBVRV2amcSKgQuro8r_W8hI&usqp=CAU"></Content>
           </div>
        </>
    )
}
export default Home;