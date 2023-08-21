import React, { useState, useEffect } from "react";
import { Email } from "../../types/email";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [savedEmails, setSavedEmails] = useState<Email[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedEmailsFromLocalStorage = localStorage.getItem("savedEmails");
    if (savedEmailsFromLocalStorage) {
      setSavedEmails(JSON.parse(savedEmailsFromLocalStorage));
    }
  }, []);

  function saveEmailToLocalStorage(email: string) {
    const id = Math.floor(Math.random() * 100000);
    const date = new Date().toLocaleString();

    const emailData = {
      id: id,
      email: email,
      date: date,
    };

    setSavedEmails([...savedEmails, emailData]);

    localStorage.setItem(
      "savedEmails",
      JSON.stringify([...savedEmails, emailData])
    );

    setEmail("");
    setShowModal(true); // Показати модальне вікно
    setTimeout(() => {
      setShowModal(false); // Приховати модальне вікно після 3 секунд
    }, 3000);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      saveEmailToLocalStorage(email);
    }
  };

  return (
    <>
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
              <div className="modal__text textH1">Thank you for your subscribe</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
