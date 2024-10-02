import BlogPostCard from "./BlogPostCard";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section3 ${className}`}>
      <div className="container15">
        <h2 className="heading11">Recent blog posts</h2>
        <div className="content23">
          <BlogPostCard
            image="/image@2x.png"
            author="Sunday , 1 Jan 2023"
            showAuthor
            heading="UX review presentations"
            supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
            text="Research"
            text1="Presentation"
          />
          <div className="column">
            <div className="blog-post-card10">
              <img
                className="image-icon20"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="content24">
                <div className="heading-and-text8">
                  <div className="author9">Sunday , 1 Jan 2023</div>
                  <div className="heading-and-text9">
                    <div className="heading12">Migrating to Linear 101</div>
                    <div className="supporting-text51">
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </div>
                  </div>
                </div>
                <div className="categories12">
                  <div className="badge32">
                    <div className="badge-base32">
                      <div className="text40">Design</div>
                    </div>
                  </div>
                  <div className="badge33">
                    <div className="badge-base33">
                      <div className="text41">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card10">
              <img
                className="image-icon20"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="content24">
                <div className="heading-and-text8">
                  <div className="author9">Sunday , 1 Jan 2023</div>
                  <div className="heading-and-text9">
                    <div className="heading12">Building your API Stack</div>
                    <div className="supporting-text51">
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </div>
                  </div>
                </div>
                <div className="categories13">
                  <div className="badge32">
                    <div className="badge-base34">
                      <div className="text40">Design</div>
                    </div>
                  </div>
                  <div className="badge33">
                    <div className="badge-base33">
                      <div className="text41">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
