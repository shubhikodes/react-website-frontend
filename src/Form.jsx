import React from 'react';

const Form = () =>{
    return(
        <>
            <form className="form">
            <div className="lbl">
                <label for="fullname">Full Name</label>
            </div>
            <div>
                <input id="fullname" type="text" placeholder="name"></input>
            </div>

            <div className="lbl">
                <label for="phone">Phone</label>
            </div>
            <div>
                <input id="phone" type="text" placeholder="mobile number"></input>
            </div>
            
            <div className="lbl">
                <label for="email" type="email">Email</label>
            </div>
            <div>
                <input id="email" placeholder="name@example.com"></input>
            </div>

            <div className="lbl">
                <label for="message">Message</label>
            </div>
            <div>
                <textarea id="message" rows="4" cols="20"/>
            </div>
            <button className="fbtn">Submit Form</button>
            </form>
        </>
    )
}
export default Form;