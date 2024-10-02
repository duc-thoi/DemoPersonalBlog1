import PropTypes from "prop-types";
import "./BlogPostCard4.css";

const BlogPostCard4 = ({ className = "", image }) => {
  return (
    <div className={`blog-post-card17 ${className}`}>
      <img className="image-icon27" alt="" src={image} />
      <div className="content43">
        <div className="heading-and-text20">
          <div className="author15">Sunday , 1 Jan 2023</div>
          <div className="heading-and-icon9">
            <h2 className="heading29">Bill Walsh leadership lessons</h2>
            <input className="icon-wrap9" type="checkbox" />
          </div>
          <div className="supporting-text62">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </div>
        </div>
        <div className="categories18">
          <div className="badge47">
            <div className="badge-base47">
              <div className="text59">Leadership</div>
            </div>
          </div>
          <div className="badge48">
            <div className="badge-base48">
              <div className="text59">Management</div>
            </div>
          </div>
          <div className="badge49">
            <div className="badge-base49">
              <div className="text59">Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard4.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BlogPostCard4;
