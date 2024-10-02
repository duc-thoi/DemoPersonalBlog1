import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BlogPostCard2.css";

const BlogPostCard2 = ({
  className = "",
  propAlignSelf,
  image,
  heading,
  propMinWidth,
  supportingText,
  propFlex,
  propMinWidth1,
  propBackgroundColor,
  text,
  propColor,
  propBackgroundColor1,
  text1,
  propColor1,
  propDisplay,
  propMinWidth2,
  propFlex1,
  propMinWidth3,
  propBackgroundColor2,
  text2,
  propColor2,
}) => {
  const blogPostCard1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const badge2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propFlex, propMinWidth1]);

  const badgeBase1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const text1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const badgeBase2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const text2Style = useMemo(() => {
    return {
      color: propColor1,
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propColor1, propDisplay, propMinWidth2]);

  const badge3Style = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth3,
    };
  }, [propFlex1, propMinWidth3]);

  const badgeBase3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const text3Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={`blog-post-card14 ${className}`} style={blogPostCard1Style}>
      <img className="image-icon24" loading="lazy" alt="" src={image} />
      <div className="content29">
        <div className="heading-and-text14">
          <div className="author13">Sunday , 1 Jan 2023</div>
          <div className="heading-and-icon7">
            <h2 className="heading16" style={heading2Style}>
              {heading}
            </h2>
            <input className="icon-wrap7" type="checkbox" />
          </div>
          <div className="supporting-text55">{supportingText}</div>
        </div>
        <div className="categories16">
          <div className="badge41" style={badge2Style}>
            <div className="badge-base41" style={badgeBase1Style}>
              <div className="text49" style={text1Style}>
                {text}
              </div>
            </div>
          </div>
          <div className="badge42">
            <div className="badge-base42" style={badgeBase2Style}>
              <div className="text50" style={text2Style}>
                {text1}
              </div>
            </div>
          </div>
          <div className="badge43" style={badge3Style}>
            <div className="badge-base43" style={badgeBase3Style}>
              <div className="text49" style={text3Style}>
                {text2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
  supportingText: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propColor1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth3: PropTypes.any,
  propBackgroundColor2: PropTypes.any,
  propColor2: PropTypes.any,
};

export default BlogPostCard2;
