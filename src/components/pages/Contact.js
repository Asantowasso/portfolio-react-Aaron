import React from "react";

// This will serve as the contact page where visitors will find ways to contact me

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <h3>Name</h3>
        <input
        name="Name"
        placeholder="Your Name"
        >
        
        </input>
        <h3>Email</h3>
        <input
        name="email"
        placeholder="Your email address"
        >

        </input>
        <h3>Message</h3>
        <input
        name="message"
        placeholder="What do you want to say?"
        >
        
        </input>

      </form>

    </div>

  );

}