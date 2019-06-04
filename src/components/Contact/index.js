import React from "react";
import "./style.css";

function Contact(props) {
  return (
    <div className="contact text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Contact;