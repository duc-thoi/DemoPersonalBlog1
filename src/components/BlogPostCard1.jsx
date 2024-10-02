import PropTypes from "prop-types";
import "./BlogPostCard1.css";

const BlogPostCard1 = ({ className = "", image }) => {
  return (
    <div className={`blog-post-card13 ${className}`}>
      <img className="image-icon23" rows={12} cols={19} alt="" src={image} />
      <div className="content28">
        <div className="heading-and-text13">
          <div className="author12">Sunday , 1 Jan 2023</div>
          <div className="heading-and-icon6">
            <h2 className="heading15">Bill Walsh leadership lessons</h2>
            <input className="icon-wrap6" type="checkbox" />
          </div>
          <div className="supporting-text54">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </div>
        </div>
        <div className="categories15">
          <div className="badge38">
            <div className="badge-base38">
              <div className="text46">Leadership</div>
            </div>
          </div>
          <div className="badge39">
            <div className="badge-base39">
              <div className="text46">Management</div>
            </div>
          </div>
          <div className="badge40">
            <div className="badge-base40">
              <div className="text46">Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCard1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default BlogPostCard1;
