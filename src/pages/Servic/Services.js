import React, { useState } from "react";
import "./Services.scss";
import {
  ServicePic3,
  ServicesPlus,
  ServicesMinus,
  ServicesWebDesign,
  ServicesAlgorithmAnalysisAndDesign,
  ServicesDatastructure,
  ServicesReact,
  ServicesHtmlCssJavascript,
} from "../../assets";

const Services = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="services_main">
      <div className="services_top">
        <div className="services">service</div>
        <div className="my_specialties">my specialties</div>
      </div>
      <div className="services_center">
        <div
          className="services_item"
          onClick={() => {
            if (open === 1) {
              setOpen(0);
            } else {
              setOpen(1);
            }
          }}
        >
          <div className="services_item_title">
            <h5 className="services_item_bulletin">&#x2022;</h5>
            web design
          </div>
          <div className="services_item_right">
            <div className="services_item_right_left">
              <img
                className={`services_item_right_left_pic ${
                  open === 1 ? "" : "pic_zero_height"
                } `}
                src={ServicesWebDesign}
                alt="services pic"
              />
              <div className="services_item_right_left_content">
                Are you ready to experience web design that captivates, engages,
                and revolutionizes the digital landscape? Look no further! As a
                highly skilled and creative web designer, I possess the
                expertise to transform your visions into stunning reality. With
                a proven track record of crafting visually striking interfaces
                and seamless user experiences, I am committed to delivering
                exceptional results that will leave your competitors in awe.
                Let's collaborate and unlock the full potential of your online
                presence today!
              </div>
            </div>
            <div className="services_item_right_right">
              <img
                className={`services_item_right_right_pic ${
                  open === 1 ? "plus_rotate_90" : ""
                }`}
                src={open === 1 ? ServicesMinus : ServicesPlus}
                alt="services plus or minus"
                onClick={() => {
                  if (open === 1) {
                    setOpen(0);
                  } else {
                    setOpen(1);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="services_item"
          onClick={() => {
            if (open === 2) {
              setOpen(0);
            } else {
              setOpen(2);
            }
          }}
        >
          <div className="services_item_title">
            <h5 className="services_item_bulletin">&#x2022;</h5>
            Algorithm analysis <br /> and design
          </div>
          <div className="services_item_right">
            <div className="services_item_right_left">
              <img
                className={`services_item_right_left_pic ${
                  open === 2 ? "" : "pic_zero_height"
                } `}
                src={ServicesAlgorithmAnalysisAndDesign}
                alt="services pic"
              />
              <div className="services_item_right_left_content">
                Are you seeking a meticulous and strategic mind to tackle
                complex algorithmic challenges? Look no further! As an
                accomplished algorithm analyst and designer, I possess a deep
                understanding of diverse problem types and can meticulously
                select the most effective design strategy for each. With a
                proven track record of optimizing efficiency and driving
                innovation, I am ready to elevate your team's problem-solving
                capabilities and deliver unparalleled results. Let's collaborate
                and revolutionize the way we approach algorithmic solutions
                together!
              </div>
            </div>
            <div className="services_item_right_right">
              <img
                className={`services_item_right_right_pic ${
                  open === 2 ? "plus_rotate_90" : ""
                }`}
                src={open === 2 ? ServicesMinus : ServicesPlus}
                alt="services plus or minus"
                onClick={() => {
                  if (open === 2) {
                    setOpen(0);
                  } else {
                    setOpen(2);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="services_item"
          onClick={() => {
            if (open === 3) {
              setOpen(0);
            } else {
              setOpen(3);
            }
          }}
        >
          <div className="services_item_title">
            <h5 className="services_item_bulletin">&#x2022;</h5>
            Datastructures
          </div>
          <div className="services_item_right">
            <div className="services_item_right_left">
              <img
                className={`services_item_right_left_pic ${
                  open === 3 ? "" : "pic_zero_height"
                } `}
                src={ServicesDatastructure}
                alt="services pic"
              />
              <div className="services_item_right_left_content">
                Are you in search of a data-driven powerhouse who can transform
                raw information into actionable insights? Look no further! As an
                adept data structures expert, I possess the expertise to curate
                and optimize data inputs for algorithms and software
                applications. With a strong foundation in efficient data
                processing, I am skilled at architecting robust systems that
                maximize productivity and deliver results. Let's join forces to
                unlock the true potential of your data and drive your
                organization's success to new heights!
              </div>
            </div>
            <div className="services_item_right_right">
              <img
                className={`services_item_right_right_pic ${
                  open === 3 ? "plus_rotate_90" : ""
                }`}
                src={open === 3 ? ServicesMinus : ServicesPlus}
                alt="services plus or minus"
                onClick={() => {
                  if (open === 3) {
                    setOpen(0);
                  } else {
                    setOpen(3);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="services_item"
          onClick={() => {
            if (open === 4) {
              setOpen(0);
            } else {
              setOpen(4);
            }
          }}
        >
          <div className="services_item_title">
            <h5 className="services_item_bulletin">&#x2022;</h5>
            React
          </div>
          <div className="services_item_right">
            <div className="services_item_right_left">
              <img
                className={`services_item_right_left_pic ${
                  open === 4 ? "" : "pic_zero_height"
                } `}
                src={ServicesReact}
                alt="services pic"
              />
              <div className="services_item_right_left_content">
                Are you ready to witness the transformative power of React in
                action? Look no further! As a highly skilled and innovative web
                designer, I bring an unrivaled proficiency in leveraging the
                JavaScript framework React to create awe-inspiring user
                interfaces. With a keen eye for detail and a passion for
                delivering exceptional user experiences, I am committed to
                crafting visually stunning and highly functional websites that
                will leave a lasting impression. Let's collaborate and bring
                your digital vision to life with the unmatched capabilities of
                React!
              </div>
            </div>
            <div className="services_item_right_right">
              <img
                className={`services_item_right_right_pic ${
                  open === 4 ? "plus_rotate_90" : ""
                }`}
                src={open === 4 ? ServicesMinus : ServicesPlus}
                alt="services plus or minus"
                onClick={() => {
                  if (open === 4) {
                    setOpen(0);
                  } else {
                    setOpen(4);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="services_item"
          onClick={() => {
            if (open === 5) {
              setOpen(0);
            } else {
              setOpen(5);
            }
          }}
        >
          <div className="services_item_title">
            <h5 className="services_item_bulletin">&#x2022;</h5>
            HTML, CSS & Javascript
          </div>
          <div className="services_item_right">
            <div className="services_item_right_left">
              <img
                className={`services_item_right_left_pic ${
                  open === 5 ? "" : "pic_zero_height"
                } `}
                src={ServicesHtmlCssJavascript}
                alt="services pic"
              />
              <div className="services_item_right_left_content">
                Are you ready to elevate your web presence with a touch of
                brilliance? Look no further! As a highly skilled and versatile
                web designer, I bring a mastery of HTML, CSS, and JavaScript to
                the table, allowing me to craft breathtaking web designs that
                seamlessly blend aesthetics and functionality. With an eye for
                detail and a passion for delivering exceptional user
                experiences, I am committed to creating visually stunning
                websites that engage and captivate audiences. Let's collaborate
                and transform your digital vision into an unforgettable reality
                with my expertise in HTML, CSS, and JavaScript web design!
              </div>
            </div>
            <div className="services_item_right_right">
              <img
                className={`services_item_right_right_pic ${
                  open === 5 ? "plus_rotate_90" : ""
                }`}
                src={open === 5 ? ServicesMinus : ServicesPlus}
                alt="services plus or minus"
                onClick={() => {
                  if (open === 5) {
                    setOpen(0);
                  } else {
                    setOpen(5);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
