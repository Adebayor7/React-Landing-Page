import React from 'react';

function ContactData() {
    return (
        <>
            <div className='contact-card'>
                <div className='row-card'>
                    <div className='contact-info-card'>
                        <h4>Get Early Access
                            <span><br/>We are on track to being the biggest
                            decentralized banks in the world  and 
                            joining the waiting list means a lot of
                            benefits for you too</span>
                        </h4>
                    </div>
                </div>    
                    <div className='contact-input-card'>
                        <fieldset className='form-body-card'>
                            <input type='Email' name='type' placeholder='Email Address'></input>
                            <input type='Name' name='type' placeholder='Name'></input>
                            <label for='text' value='text'>
                                <select className='input' value='form-input-card'>
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
};

export default ContactData;
