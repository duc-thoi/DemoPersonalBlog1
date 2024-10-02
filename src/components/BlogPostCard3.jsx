import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BlogPostCard3.css";

const BlogPostCard3 = ({
  className = "",
  propAlignSelf,
  image,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const blogPostCard2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text4Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className={`blog-post-card15 ${className}`} style={blogPostCard2Style}>
      <img className="image-icon25" loading="lazy" alt="" src={image} />
      <div className="content30">
        <div className="heading-and-text15">
          <div className="author14">Sunday , 1 Jan 2023</div>
          <div className="heading-and-icon8">
            <h2 className="heading17" style={heading3Style}>
              Podcast: Creating a better CX Community
            </h2>
            <input className="icon-wrap8" type="checkbox" />
          </div>
          <div className="supporting-text56">
            Starting a community doesn’t need to be complicated, but how do you
            get started?
          </div>
        </div>
        <div className="categories17">
          <div className="badge44">
            <div className="badge-base44">
              <div className="text52">Podcasts</div>
            </div>
          </div>
          <div className="badge45">
            <div className="badge-base45">
              <div className="text53" style={text4Style}>
                Customer Success
              </div>
            </div>
          </div>
          <div className="badge46">
            <div className="badge-base46">
              <div className="text54">Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard3.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default BlogPostCard3;
