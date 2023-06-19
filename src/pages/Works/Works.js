import React, { useState } from "react";
import { DownloadIcon } from "../../assets";
import "./Works.scss";
import {
  WorksPic1,
  WorksPic2,
  WorksPic3,
  WorksPic4,
  WorkSingleItemArrow,
  LetsTalkOrnament,
  WorksBottomCenterImg,
  WorksLeftArrow,
  WorksRightArrow,
  WorksSquareLogo,
  WorksPaperzLogo,
  WorksCuebiqLogo,
  WorksMartinoLogo,
} from "../../assets";

import AllProjects from "../../components/Projects";
import Testimonials from "../../components/Testimoials";

const Works = () => {
  const [loadIndex, setLoadIndex] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="works_main">
      <div className="works_top">
        <div className="work">work</div>
        <div className="recent_project">recent project</div>
      </div>
      <div className="works_center">
        <div className="works_center_top">
          {AllProjects.map((project, index) => {
            if (index <= loadIndex)
              return (
                <div className="works_center_top_single_item">
                  <div className="works_center_top_single_item_left">
                    <div className="works_center_top_single_item_left_meta">
                      Case study
                    </div>
                    <div className="works_center_top_single_item_left_title">
                      {project.project_name}
                    </div>
                    <div className="download_xd">
                      {/* <img
                        className="works_single_item_arrow"
                        src={DownloadIcon}
                        alt="work single item arrow"
                      /> */}
                      {project.project_xd !== null && (
                        <a
                          href={project.project_xd}
                          className="download_xd_file"
                          download
                        >
                          download XD
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="works_center_top_single_item_right">
                    <a
                      href={project.project_webpage}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="work_pic"
                        src={project.project_png}
                        alt="work pic"
                      />
                    </a>
                  </div>
                </div>
              );
          })}

          {/* <div className="works_center_top_single_item">
            <div className="works_center_top_single_item_left">
              <div className="works_center_top_single_item_left_meta">
                UX case study
              </div>
              <div className="works_center_top_single_item_left_title">
                bally <br /> website <br /> research
              </div>
              <img
                className="works_single_item_arrow"
                src={WorkSingleItemArrow}
                alt="work single item arrow"
              />
            </div>
            <div className="works_center_top_single_item_right">
              <img className="work_pic" src={WorksPic1} alt="work pic" />
            </div>
          </div>

          <div className="works_center_top_single_item">
            <div className="works_center_top_single_item_left">
              <div className="works_center_top_single_item_left_meta">
                UX case study
              </div>
              <div className="works_center_top_single_item_left_title">
                bally <br /> website <br /> research
              </div>
              <img
                className="works_single_item_arrow"
                src={WorkSingleItemArrow}
                alt="work single item arrow"
              />
            </div>
            <div className="works_center_top_single_item_right">
              <img className="work_pic" src={WorksPic2} alt="work pic" />
            </div>
          </div>

          <div className="works_center_top_single_item">
            <div className="works_center_top_single_item_left">
              <div className="works_center_top_single_item_left_meta">
                UX case study
              </div>
              <div className="works_center_top_single_item_left_title">
                bally <br /> website <br /> research
              </div>
              <img
                className="works_single_item_arrow"
                src={WorkSingleItemArrow}
                alt="work single item arrow"
              />
            </div>
            <div className="works_center_top_single_item_right">
              <img className="work_pic" src={WorksPic3} alt="work pic" />
            </div>
          </div>

          <div className="works_center_top_single_item">
            <div className="works_center_top_single_item_left">
              <div className="works_center_top_single_item_left_meta">
                UX case study
              </div>
              <div className="works_center_top_single_item_left_title">
                bally <br /> website <br /> research
              </div>
              <img
                className="works_single_item_arrow"
                src={WorkSingleItemArrow}
                alt="work single item arrow"
              />
            </div>
            <div className="works_center_top_single_item_right">
              <img className="work_pic" src={WorksPic4} alt="work pic" />
            </div>
          </div> */}
        </div>
        <div className="works_center_bottom">
          <button
            className={`work_load_more_btn ${
              AllProjects.length - 1 <= loadIndex ? "load_more_invisible" : ""
            }`}
            onClick={() => {
              setLoadIndex(loadIndex + 4);
            }}
          >
            Load more <img src={LetsTalkOrnament} alt="load more ornament" />
          </button>
        </div>
      </div>
      <div className="works_bottom">
        <div className="works_bottom_top">
          <div className="testimonial">Testimonial</div>
          <div className="what_they_says">what they says</div>
        </div>
        <div className="works_bottom_center">
          <div className="works_bottom_center_left">
            <img
              className="works_bottom_center_left_img"
              src={WorksBottomCenterImg}
              alt="works bottom center img"
            />
          </div>
          <div className="works_bottom_center_right">
            <div className="works_bottom_center_right_title">
              “{Testimonials[testimonialIndex].text}”
            </div>
            <div className="works_bottom_center_name">
              -{Testimonials[testimonialIndex].person}
            </div>
            <div className="works_bottom_center_title">
              {Testimonials[testimonialIndex].title}
            </div>
            <div className="works_arrow_holder">
              <img
                className="works_arrow"
                src={WorksLeftArrow}
                alt="works left arrow"
                onClick={() => {
                  testimonialIndex === 0
                    ? setTestimonialIndex(Testimonials.length - 1)
                    : setTestimonialIndex(testimonialIndex - 1);
                }}
              />
              <img
                className="works_arrow"
                src={WorksRightArrow}
                alt="works right arrow"
                onClick={() => {
                  setTestimonialIndex(
                    (testimonialIndex + 1) % (Testimonials.length - 1)
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="works_bottom_bottom">
          <a
            href="https://www.sqresolutions.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WorksSquareLogo} alt="square real estate logo" />
          </a>
          <a
            href="https://paperz-ip.com/en/archivists-serving-intellectual-property/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WorksPaperzLogo} alt="paper z logo" />
          </a>
          <a href="https://www.cuebiq.com/" target="_blank" rel="noreferrer">
            <img src={WorksCuebiqLogo} alt="cuebiq logo" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={WorksMartinoLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
