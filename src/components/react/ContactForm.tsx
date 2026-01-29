import { useState, type FormEvent } from "react";
import "./ContactForm.css";

/**
 * Contact Form Component
 * Interactive form for sending messages via Formspree
 */

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(true);

    const url = "https://formspree.io/f/xrbaraoj";
    const body = { name, email, message };

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Form submission failed",
      );
    }
    setFormStatus(false);
  };

  return (
    <form onSubmit={handleSubmit} id="survey-form" className="contact-form">
      <div className="form-group">
        <label htmlFor="name" id="name-label">
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email" id="email-label">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <textarea
          name="message"
          id="textarea"
          cols={30}
          rows={5}
          className="form-input"
          placeholder="Leave your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="form-submit"
          id="submit"
          disabled={formStatus}
        >
          {formStatus ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
