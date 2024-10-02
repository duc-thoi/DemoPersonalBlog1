import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBlogContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNewsletterContainerClick = useCallback(() => {
    navigate("/newsletter");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <div className={`header-container ${className}`}>
      <header className="header7">
        <div className="navbar6">
          <a className="your-name6">Your Name</a>
          <div className="menu13">
            <div className="blog12" onClick={onBlogContainerClick}>
              <a className="blog13">Blog</a>
            </div>
            <div className="projects14">
              <div className="projects-frame">
                <a className="projects15">Projects</a>
              </div>
            </div>
            <div className="blog12" onClick={onAboutContainerClick}>
              <a className="blog13">About</a>
            </div>
            <div className="blog12" onClick={onNewsletterContainerClick}>
              <a className="newsletter14">Newsletter</a>
            </div>
            <div className="toggle-mode6">
              <img
                className="iconoutlinesun6"
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div
                className="iconoutlinemoon6"
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className="moon-icon6"
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

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
