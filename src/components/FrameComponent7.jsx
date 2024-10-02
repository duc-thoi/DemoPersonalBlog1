import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBlogContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onProjectsContainerClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onNewsletterContainerClick = useCallback(() => {
    navigate("/newsletter");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <div className={`header-wrapper ${className}`}>
      <header className="header6">
        <div className="navbar5">
          <a className="your-name5">Your Name</a>
          <div className="menu12">
            <div className="blog10" onClick={onBlogContainerClick}>
              <a className="blog11">Blog</a>
            </div>
            <div className="projects12" onClick={onProjectsContainerClick}>
              <div className="projects-container">
                <a className="blog11">Projects</a>
              </div>
            </div>
            <div className="about11">
              <div className="about-wrapper">
                <a className="about12">About</a>
              </div>
            </div>
            <div className="projects12" onClick={onNewsletterContainerClick}>
              <div className="newsletter-container">
                <a className="newsletter12">Newsletter</a>
              </div>
            </div>
            <div className="toggle-mode5">
              <img
                className="iconoutlinesun5"
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div
                className="iconoutlinemoon5"
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className="moon-icon5"
                  loading="lazy"
                  alt=""
                  src="/moon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
