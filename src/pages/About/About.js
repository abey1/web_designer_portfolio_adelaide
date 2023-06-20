import React from "react";
import "./About.scss";
import {
  AboutLeftImage,
  AboutDownloadCVOrnament,
  PhoneIconAbout,
  EmailIconAbout,
  ContactIcon,
  LocationIcon,
  AboutCoute,
  LetsTalkOrnament,
  Cv,
} from "../../assets";

const About = () => {
  return (
    <div className="about_main">
      <div className="about_main_top">
        <div className="about_welcome">
          <div className="about_welcome_top">Nice to meet you!</div>
          <div className="about_welcome_bottom">welcome to...</div>
        </div>
        <div className="about_center">
          <div className="about_center_left">
            <img
              src={AboutLeftImage}
              alt="about left img"
              className="about_left_img_holder"
            />
            <div className="about_center_left_name">ABEY DELLELEGN</div>
            <div className="about_center_left_title">
              <span className="about_center_left_title_web_developer">
                Web Developer
              </span>{" "}
              based in{" "}
              <span className="about_center_left_title_adelaide">Adelaide</span>
            </div>
            <a className="about_center_left_download_cv" href={Cv} download>
              Download CV
              <img
                src={AboutDownloadCVOrnament}
                alt="about download cv ornament"
                className="about_download_cv_ornament"
              />
            </a>
          </div>
          <div className="about_center_right">
            <div className="about_center_right_top">
              <div className="about_center_right_single_item">
                <div className="about_center_right_single_item_internal">
                  <img src={PhoneIconAbout} alt="phone icon" />
                  +04 1149 01 49
                </div>
                <div className="about_center_right_single_item_internal internal_bottom">
                  <img src={EmailIconAbout} alt="phone icon" />
                  bruckabey@gmail.com
                </div>
              </div>
              <div className="about_center_right_single_item">
                <div className="about_center_right_single_item_internal">
                  <img src={ContactIcon} alt="phone icon" />
                  36 yrs
                </div>
                <div className="about_center_right_single_item_internal internal_bottom">
                  <img src={LocationIcon} alt="phone icon" />
                  Australia, Adelaide
                </div>
              </div>
            </div>
            <div className="about_center_right_middle">
              <div className="about_center_right_middle_item">
                <div className="about_center_right_middle_item_top">
                  <div className="about_center_right_middle_item_top_number">
                    13+
                  </div>
                  <div className="about_center_right_middle_item_top_text">
                    Years <br /> experience...
                  </div>
                </div>
                <div className="about_center_right_middle_item_bottom">
                  Hello there! My name is{" "}
                  <span className="about_first_name">Abey</span>
                  <span className="about_last_name">Dellelegn</span> . I am a
                  web designer & developer, and I'm very passionate and
                  dedicated to my work.
                </div>
              </div>
              <div className="about_center_right_middle_item mobile_width_bottom">
                <div className="about_center_right_middle_item_top">
                  <div className="about_center_right_middle_item_top_number">
                    2
                  </div>
                  <div className="about_center_right_middle_item_top_text">
                    Clients <br /> Worldwide
                  </div>
                </div>
                <div className="about_center_right_middle_item_bottom">
                  With 13+ years experience as a professional a graphic
                  designer, I have acquired the skills and knowledge necessary
                  to make your project a success.
                </div>
              </div>
            </div>
            <div className="about_center_right_bottom">
              <div className="about_center_right_bottom_center">
                <img className="coute" src={AboutCoute} alt="about coute" />
                <div className="about_center_right_bottom_center_text">
                  “Passionate web developer with expertise in HTML, CSS,
                  JavaScript, SQL React, and Angular. Dedicated to creating
                  dynamic and user-friendly websites, with a strong eye for
                  design and attention to detail.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_bottom">
        <div className="about_bottom_left">
          <div className="about_bottom_left_center">
            <div className="about_bottom_left_experience">Experience</div>
            <div className="about_bottom_left_my_experience">my experience</div>
            <div className="about_bottom_left_text">
              Hello there! My name is Abey Dellelegn. <br />
              I am a web designer & developer, and I'm very <br /> passionate
              and dedicated to my work.
            </div>
            <a className="about_bottom_left_btn" href={Cv} download>
              Download my resume
              <img src={LetsTalkOrnament} alt="lets talk ornament" />
            </a>
          </div>
        </div>
        <div className="about_bottom_right">
          <div className="about_bottom_right_center">
            <div className="about_bottom_right_item">
              <div className="about_bottom_right_item_top">
                <div className="about_bottom_right_item_top_left">
                  -2018 - 2022
                </div>
                <div className="about_bottom_right_item_top_right">
                  -ezzy software
                </div>
              </div>
              <div className="about_bottom_right_item_bottom">
                senior web developer
              </div>
            </div>

            <div className="about_bottom_right_item">
              <div className="about_bottom_right_item_top">
                <div className="about_bottom_right_item_top_left">
                  -2015 - 2018
                </div>
                <div className="about_bottom_right_item_top_right">
                  -Nyanza Road Works Ltd
                </div>
              </div>
              <div className="about_bottom_right_item_bottom">
                junior web developer
              </div>
            </div>

            <div className="about_bottom_right_item">
              <div className="about_bottom_right_item_top">
                <div className="about_bottom_right_item_top_left">
                  -2008 - 2023
                </div>
                <div className="about_bottom_right_item_top_right">
                  -Arba Minch University
                </div>
              </div>
              <div className="about_bottom_right_item_bottom">lecturer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
