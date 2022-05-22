import React, { useState } from "react";
import { validateEmail } from "../../utils/helper.js";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email is invalid");

      return;
    }
    setName("");
    setEmail("");
  };

  return (
    <div className="center-form form-padding">
      <h3 className="text-decoration-none">
        Please email me at samuels.brian9@gmail.com or fill out the form below:
      </h3>
      <form className="form-text form-center form-padding">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          className="d-block center center-form"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className="d-block center center-form"
        />

        <button type="button" onClick={handleFormSubmit} className="bg-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
export default Contact;