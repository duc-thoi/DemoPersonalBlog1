import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HeadingAndIcon.css";

const HeadingAndIcon = ({ className = "", heading, propMinWidth }) => {
  const heading4Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`heading-and-icon11 ${className}`}>
      <h2 className="heading38" style={heading4Style}>
        {heading}
      </h2>
      <div className="icon-wrap11">
        <img
          className="arrow-up-right-icon5"
          loading="lazy"
          alt=""
          src="/arrowupright.svg"
        />
      </div>
    </div>
  );
};

HeadingAndIcon.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default HeadingAndIcon;
