import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProjectsContainerClick = useCallback(() => {
    navigate("/projects");
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
    <header className={`header4 ${className}`}>
      <div className="navbar3">
        <a className="your-name3">Your Name</a>
        <div className="menu10">
          <div className="blog6">
            <div className="blog-container">
              <a className="blog7">Blog</a>
            </div>
          </div>
          <div className="projects8" onClick={onProjectsContainerClick}>
            <a className="projects9">Projects</a>
          </div>
          <div className="projects8" onClick={onAboutContainerClick}>
            <a className="projects9">About</a>
          </div>
          <div className="projects8" onClick={onNewsletterContainerClick}>
            <a className="newsletter8">Newsletter</a>
          </div>
          <div className="toggle-mode3">
            <img
              className="iconoutlinesun3"
              loading="lazy"
              alt=""
              src="/iconoutlinesun.svg"
            />
            <div
              className="iconoutlinemoon3"
              onClick={onIconoutlinemoonContainerClick}
            >
              <img
                className="moon-icon3"
                loading="lazy"
                alt=""
                src="/moon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
