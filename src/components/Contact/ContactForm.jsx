import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="txt">
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? let's talk about your project or
            idae and find out how we can help your business grow or bring your
            idea(s) to life. If you are looking for unique digital experiences
            that's relatable to your users, do reach out to us.
          </p>
        </div>
        <div className="form">
          <form>
            <div className="input-control">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-control">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-control">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input-control">
              <input type="text" placeholder="Your Message" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
