import React from "react";
import "./Home.scss";
import {
  HomeLeftBackground,
  LetsTalkOrnament,
  PhoneIcon,
  EmailIcon,
  HomeRightImage,
} from "../../assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home_main">
      <div className="home_left">
        <img
          className="left_background_img"
          src={HomeLeftBackground}
          alt="home left background"
        ></img>
        <div className="home_left_name_intro">
          my name <br /> is{" "}
          <span className="name">
            abey <br /> dellelegn
          </span>{" "}
        </div>
        <div className="home_left_title">
          <span className="home_left_title_italic">Web Developer</span> based in{" "}
          <span className="home_left_title_italic">Adelaide</span>
        </div>
        <button
          className="lets_talk_btn"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Let's talk
          <img
            className="lets_talk_ornament"
            src={LetsTalkOrnament}
            alt="lets talk ornament"
          />
        </button>
        <div className="home_left_contact">
          <div className="home_left_phone">
            <img
              className="home_left_phone_icon"
              src={PhoneIcon}
              alt="phone icon"
            />
            +04 1149 01 49
          </div>
          <div className="home_left_email">
            <img
              className="home_left_email_icon"
              src={EmailIcon}
              alt="phone icon"
            />
            bruckabey@gmail.com
          </div>
        </div>
      </div>
      <div className="home_right">
        <img
          src={HomeRightImage}
          alt="home right img"
          className="home_right_image_holder"
        />
      </div>
    </div>
  );
};

export default Home;
