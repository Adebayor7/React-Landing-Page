import React from "react";

function ContactCardList() {
  return (
    <>
      <div id="contact-container">
        <div className="row">
          <div className="contact-info">
            <h4>
            Get Early Access
            </h4>
            <span>
              We are on track to being the biggest decentralized <br/>banks in the
              world and joining the waiting list means <br/> a lot of benefits for you
              too
            </span>
          </div>
        </div>
        <div className="contact-input">
          <fieldset className="form-body">
            <input type="Email" name="type" placeholder="Email Address"></input>
            <input type="Name" name="type" placeholder="Name"></input>
            <label for="text" value="text">
              <select className="input" value="form-input">
                <option>What you do</option>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Full-stack developer</option>
              </select>
            </label>
            <ul className="main">
              <li>
                <a href="#">Join The Waiting List</a>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
    </>
  );
}
export default ContactCardList;
