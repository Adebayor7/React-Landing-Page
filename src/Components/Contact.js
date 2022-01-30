import React from 'react'

function Contact() {
    return (
        <>
        <div id='contact-container'>
                <div className='row'>
                    <div className='contact-info'>
                        <h4>Welcome to the world of Decentralized banking</h4>
                            <span>Do everything the traditional bank can do and more</span>
                    </div>
                </div>    
                    <div className='contact-input'>
                        <fieldset className='form-body'>
                            <input type='Email' name='type' placeholder='Email Address'></input>
                            <input type='Name' name='type' placeholder='Name'></input>
                            <label for='text' value='text'>
                                <select className='input' value='form-input'>
                                    <option>What you do</option>
                                    <option>Front-end</option>
                                    <option>Back-end</option>
                                    <option>Full-stack developer</option>
                                </select>
                            </label>
                            <ul className='main'>
                                <li><a href='#'>Join The Waiting List</a></li>
                            </ul>
                        </fieldset>
                    </div>   
                
        </div>
    </>
)
}
export default Contact;