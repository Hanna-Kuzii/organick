import React, { useState } from "react"; // Removed 'useEffect' import since it's not being used
import axios from "axios";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const saveEmail = async (emailValue: string) => {
    const id = Math.floor(Math.random() * 10000000);
    const date = new Date().toLocaleString();

    const emailData = {
      id_userSubscribe: id,
      email: emailValue,
      created: date,
    };

    try {
      await axios.post("http://localhost:8000/user_subscribe", emailData);
    } catch (err) {
      console.log(err);
    }

    setEmail("");
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      saveEmail(email);
    }
  };

  return (
    <div className="app__subscribe subscribe">
      <div className="subscribe__content">
        <div className="subscribe__title textH2">
          Subscribe to our Newsletter
        </div>
        <form onSubmit={handleSubmit} className="subscribe__form">
          <input
            type="email"
            name="email"
            id="email"
            className="subscribe__input"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="subscribe__button default-button default-button_dark"
          >
            Subscribe
          </button>
        </form>
        {showModal && (
          <div className="subscribe__modal modal">
            <div className="modal__text textH1">
              Thank you for subscribing
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
