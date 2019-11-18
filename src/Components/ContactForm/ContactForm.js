import React from "react";
import "./ContactForm.scss";

const ContactForm = () => (
  <div className="form-container">
    <h2 className="form-title">Keep In Touch</h2>
    <form
      className="form"
      id="contact-form text-center"
      method="post"
      action="/contact.php"
    >
      <div className="form-group text-center">
        <input
          id="form_name"
          type="text"
          name="name"
          className="form-control"
          placeholder="first name"
          required="required"
          data-error="Firstname is required."
        />
        <div className="help-block with-errors" />
      </div>
      <div className="form-group">
        <input
          id="form_lastname"
          type="text"
          name="surname"
          className="form-control"
          placeholder="last name"
          required="required"
          data-error="Lastname is required."
        />
        <div className="help-block with-errors" />
      </div>
      <div className="form-group">
        <input
          id="form_email"
          type="email"
          name="email"
          className="form-control"
          placeholder="email"
          required="required"
          data-error="Valid email is required."
        />
        <div className="help-block with-errors" />
      </div>
      <input
        type="submit"
        className="btn form-button"
        value="Submit"
        id="submit"
      />
    </form>
  </div>
);

export default ContactForm;
