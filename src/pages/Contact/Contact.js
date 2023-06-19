import React, { useState } from "react";
import "./Contact.scss";
import { AttachFileIcon, LetsTalkOrnament } from "../../assets";
const Contact = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  return (
    <div className="contact_main">
      <div className="contact_left">
        <div className="contact_title">contact</div>
        <div className="reach_out">reach out</div>
        <div className="contact_address">34 Mary St, Peterhead 5016</div>
        <div className="contact_phone_no">+61 411 4901 49</div>
        <div className="contact_email">bruckabey@gmail.com</div>
        <div className="contact_social_media">
          <a
            href="https://www.facebook.com/profile.php?id=100072384145835"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media">facebook</div>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <div className="social_media">twitter</div>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <div className="social_media">instagram</div>
          </a>
          <a
            href="https://www.linkedin.com/in/abey-dellelegn-415a8480/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media">linkedin</div>
          </a>
        </div>
      </div>
      <div className="contact_right">
        <div className="contact_right_title">any project?</div>
        <form action="https://formspree.io/f/mnqyeodp" method="POST">
          <input className="contact_input" type="text" placeholder="name" />
          <input
            className="contact_input"
            type="email"
            name="email"
            placeholder="email"
          />
          <div className="message_name_holder">message</div>
          <textarea
            className="contact_input"
            name="message"
            id="message"
            cols="30"
            rows="3"
          ></textarea>
          <label for="actual_btn" className="attach_file">
            <img src={AttachFileIcon} alt="attach file icon" />{" "}
            {selectedFile !== null ? fileName : "attach file"}
            <input
              // value={selectedFile}
              onChange={(e) => {
                e.target.files[0] !== undefined &&
                  setSelectedFile(e.target.files[0]);
                e.target.files[0] !== undefined &&
                  setFileName(e.target.files[0].name);
              }}
              id="actual_btn"
              type="file"
              name="upload"
              hidden
            />
          </label>
          <button className="contact_submit_btn" type="submit">
            Submit now <img src={LetsTalkOrnament} alt="lets talk ornament" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
