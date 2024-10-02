import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeadingAndText.css";

const HeadingAndText = ({
  className = "",
  author,
  showAuthor,
  propAlignSelf,
  onImageClick,
  propFlexWrap,
  heading,
  propMinWidth,
  supportingText,
}) => {
  const author1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const headingAndIconStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const heading1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const navigate = useNavigate();

  const onHeadingAndIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`heading-and-text12 ${className}`}>
      {showAuthor && (
        <div className="author11" style={author1Style}>
          {author}
        </div>
      )}
      <div
        className="heading-and-icon5"
        onClick={onImageClick}
        style={headingAndIconStyle}
      >
        <h2 className="heading14" style={heading1Style}>
          {heading}
        </h2>
        <input className="icon-wrap5" type="checkbox" />
      </div>
      <div className="supporting-text53">{supportingText}</div>
    </div>
  );
};

HeadingAndText.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string,
  showAuthor: PropTypes.bool,
  heading: PropTypes.string,
  supportingText: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlexWrap: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onImageClick: PropTypes.func,
};

export default HeadingAndText;
