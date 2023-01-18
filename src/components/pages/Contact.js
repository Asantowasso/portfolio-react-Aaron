import { useState } from "react";
import "../styles/Contact.css";

// This will serve as the contact page where visitors will find ways to contact me.

// The page features a form where visitors can enter their name, email and a message for me to view.
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Email or Name is invalid");

      return;
    }

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="contacts">
      <h1>Contact</h1>
      <form className="form">
        <h3>Name</h3>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          size="35"
          placeholder="Your Name"
        />

        <h3>Email</h3>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          size="35"
          placeholder="Your email address"
        />

        <h3>Message</h3>
        <textarea
          rows="10"
          cols="70"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="What do you want to say?"
        />
      </form>
      <br></br>
      <button type="button" className="button" onClick={handleFormSubmit}>
        Submit
      </button>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
