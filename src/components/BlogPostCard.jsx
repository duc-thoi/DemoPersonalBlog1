import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BlogPostCard.css";

const BlogPostCard = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
  image,
  propHeight,
  author,
  showAuthor,
  propAlignSelf1,
  heading,
  propMinWidth1,
  supportingText,
  propFlex1,
  propFlex2,
  propFlex3,
  propMinWidth2,
  text,
  propMinWidth3,
  text1,
}) => {
  const blogPostCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const imageIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const authorStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const headingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const badgeBaseStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const textStyle = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const badgeStyle = useMemo(() => {
    return {
      flex: propFlex3,
      minWidth: propMinWidth2,
    };
  }, [propFlex3, propMinWidth2]);

  const badge1Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={`blog-post-card9 ${className}`} style={blogPostCardStyle}>
      <img
        className="image-icon19"
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className="content22">
        <div className="heading-and-text7">
          {showAuthor && (
            <div className="author8" style={authorStyle}>
              {author}
            </div>
          )}
          <div className="heading-and-icon4">
            <h2 className="heading10" style={headingStyle}>
              {heading}
            </h2>
            <input className="icon-wrap4" type="checkbox" />
          </div>
          <div className="supporting-text50">{supportingText}</div>
        </div>
        <div className="categories11">
          <div className="badge29">
            <div className="badge-base29" style={badgeBaseStyle}>
              <div className="text37" style={textStyle}>
                Design
              </div>
            </div>
          </div>
          <div className="badge30" style={badgeStyle}>
            <div className="badge-base30">
              <div className="text38">{text}</div>
            </div>
          </div>
          <div className="badge31" style={badge1Style}>
            <div className="badge-base31">
              <div className="text39">{text1}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  showAuthor: PropTypes.bool,
  heading: PropTypes.string,
  supportingText: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propFlex2: PropTypes.any,
  propFlex3: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
};

export default BlogPostCard;
