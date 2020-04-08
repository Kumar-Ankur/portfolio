import React, { useState, useEffect } from "react";
import FullScreenOverlay from "../FullScreenOverlay/FullScreenOverlay";
import { FaGithub, FaLinkedinIn, FaFacebookSquare, FaMedium } from 'react-icons/fa';
import "./ContactView.css";

const ContactView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSendButtonVisible, setIsSendButtonVisible] = useState(false);

  const checkAllFieldDone = () => {
    return (
      name.length > 0 && email.length > 0 && message.length > 0 && isEmailValid
    );
  };

  const checkEmailFormat = (str) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(str).toLowerCase())) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  useEffect(() => {
    if (checkAllFieldDone()) {
      setIsSendButtonVisible(true);
    } else {
      setIsSendButtonVisible(false);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      message: message,
    };
    const CHECK_EMAIL_API = "https://apilayer.net/api/check?";
    const ACCESS_KEY = "2a06540672198270e23371cbce03435a";

    const URL = `${CHECK_EMAIL_API}access_key=${ACCESS_KEY}&email=${email}&smtp=1&format=1`;
    fetch(URL)
      .then((response) => response.json())
      .then((resp) => {
        if (resp.smtp_check) {
          fetch("/send", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((response) => {
              if (response.status === "success") {
                setStatusMessage("Your Message has been sent successfully");
                const statusTimer = setTimeout(() => {
                  setStatusMessage("");
                  clearTimeout(statusTimer);
                }, 5000);
                setName("");
                setEmail("");
                setMessage("");
              } else if (response.status === "fail") {
                setStatusMessage(
                  "Something went wrong while sending. Please check email address"
                );
                const statusTimer = setTimeout(() => {
                  setStatusMessage("");
                  clearTimeout(statusTimer);
                }, 5000);
              }
            });
        } else {
          setStatusMessage("Email doesnot exists. Please check once before sending.");
          const statusTimer = setTimeout(() => {
            setStatusMessage("");
            clearTimeout(statusTimer);
          }, 5000);
        }
      });
  };
  return (
    <>
      <FullScreenOverlay />
      <div className="contact_container">
        <div className="contact_box">
          <h1>CONTACT ME</h1>
          <p>{statusMessage}</p>
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              {!isEmailValid ? (
                <span style={{ color: "rgb(233, 197, 94)" }}>
                  Incorrect Email Format
                </span>
              ) : null}
              <br />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  checkEmailFormat(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            {isSendButtonVisible ? (
              <button
                type="submit"
                className="btn btn-primary btnStyle"
                onClick={(e) => handleSubmit(e)}
              >
                Send
              </button>
            ) : null}
          </form>
          <div className="follow">
            Follow me on:
            <span className="social_icon">
              <a href="https://github.com/Kumar-Ankur" target="_blank">
                <FaGithub />
              </a>
            </span>
            <span className="social_icon">
              <a href="https://www.linkedin.com/in/kumar-ankur-696026b7/" target="_blank">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="social_icon">
              <a href="https://www.facebook.com/profile.php?id=100002341914094" target="_blank">
                <FaFacebookSquare />
              </a>
            </span>
            <span className="social_icon">
              <a href="https://medium.com/@akakankur81" target="_blank">
                <FaMedium />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactView;
