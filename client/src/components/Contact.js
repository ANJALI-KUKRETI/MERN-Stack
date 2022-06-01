import React from "react";

const Contact = () => {
  return (
    <div>
      <form id="contact-form">
        <div className="up">
          <input
            type="text"
            id="contact-form-name"
            placeholder="Your Name"
            required="true"
          />
          <input
            type="email"
            id="contact-form-email"
            placeholder="Your Email"
            required="true"
          />
          <input
            type="number"
            id="contact-form-phone"
            placeholder="Your Phone Number"
            required="true"
          />
        </div>
        <div className="down">
          <textarea
            name="message"
            placeholder="Message"
            cols="70"
            rows="10"
          ></textarea>
        </div>
        <div className="btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
