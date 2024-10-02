import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeadingAndText from "./HeadingAndText";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHeadingAndIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`section-container ${className}`}>
      <div className="section4">
        <div className="container16">
          <div className="content26">
            <div className="blog-post-card12">
              <img
                className="image-icon22"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
                onClick={onHeadingAndIconClick}
              />
              <div className="content27">
                <HeadingAndText
                  author="Sunday , 1 Jan 2023"
                  showAuthor
                  onImageClick={onHeadingAndIconClick}
                  heading="Grid system for better Design User Interface"
                  supportingText="A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
                />
                <div className="categories14">
                  <div className="badge36">
                    <div className="badge-base36">
                      <div className="text44">Design</div>
                    </div>
                  </div>
                  <div className="badge37">
                    <div className="badge-base37">
                      <div className="text45">Interface</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
