import React from 'react';
import Content from "./Content"

const About=()=>{
    return(
        <>
            <div className="about">
            <Content heading="Welcome to the About of"
                names="Thoughful Technical"
                subheading="We are a team of talented developers making websites"
                btn="Get Started"
                isrc="https://img.freepik.com/premium-vector/business-characters-team-work-office-people-corporate-employee-cartoon-teamwork-communication-business-team-illustration_176516-369.jpg?w=2000"></Content>
            </div>
        </>
    )
}
export default About;