import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header3.css";

const Header3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBlogContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onProjectsContainerClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onAboutContainerClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <header className={`header5 ${className}`}>
      <div className="navbar4">
        <a className="your-name4">Your Name</a>
        <div className="menu11">
          <div className="blog8" onClick={onBlogContainerClick}>
            <a className="blog9">Blog</a>
          </div>
          <div className="projects10" onClick={onProjectsContainerClick}>
            <div className="projects-wrapper">
              <a className="blog9">Projects</a>
            </div>
          </div>
          <div className="blog8" onClick={onAboutContainerClick}>
            <a className="blog9">About</a>
          </div>
          <div className="newsletter9">
            <div className="newsletter-wrapper">
              <a className="newsletter10">Newsletter</a>
            </div>
          </div>
          <div className="toggle-mode4">
            <img
              className="iconoutlinesun4"
              loading="lazy"
              alt=""
              src="/iconoutlinesun.svg"
            />
            <div
              className="iconoutlinemoon4"
              onClick={onIconoutlinemoonContainerClick}
            >
              <img
                className="moon-icon4"
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

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
