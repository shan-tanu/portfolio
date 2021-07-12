import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={props.close}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="upper-section">
          <h1>Welcome to my portfolio!!</h1>
          <p className="close" onClick={props.close}>
            &times;
          </p>
        </div>
        <div className="middle-section">
          <h3>I am an Undergraduate Student</h3>
          <p>
            A tech entusiast and a developer exploring and building Web Apps.
          </p>
        </div>
        <div className="lower-section">
          <a
            href="https://www.linkedin.com/in/shantanu-mysore-gopinath-150a7b16a/"
            target="_blank"
            rel="noreferrer"
            className="modal-btn btn-green"
          >
            Check out LinkedIn
          </a>
          <a className="modal-btn btn-red" onClick={props.close}>
            Close
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
