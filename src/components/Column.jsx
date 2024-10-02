import BlogPostCard from "./BlogPostCard";
import BlogPostCard4 from "./BlogPostCard4";
import BlogPostCard2 from "./BlogPostCard2";
import BlogPostCard3 from "./BlogPostCard3";
import PropTypes from "prop-types";
import "./Column.css";

const Column = ({ className = "" }) => {
  return (
    <div className={`column1 ${className}`}>
      <h2 className="heading30">Recent blog posts</h2>
      <BlogPostCard
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image3@2x.png"
        propHeight="204px"
        author="Sunday , 1 Jan 2023"
        showAuthor
        propAlignSelf1="stretch"
        heading="UX review presentations"
        propMinWidth1="197px"
        supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
        propFlex1="1"
        propFlex2="1"
        propFlex3="unset"
        propMinWidth2="unset"
        text="Research"
        propMinWidth3="69px"
        text1="Presentation"
      />
      <div className="blog-post-card18">
        <img className="image-icon28" alt="" src="/image-13@2x.png" />
        <div className="blog-post-card18">
          <div className="heading-and-text21">
            <div className="author16">Sunday , 1 Jan 2023</div>
            <div className="heading-and-text22">
              <div className="heading31">Migrating to Linear 101</div>
              <div className="supporting-text63">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get...
              </div>
            </div>
          </div>
          <div className="categories19">
            <div className="badge50">
              <div className="badge-base50">
                <div className="text62">Design</div>
              </div>
            </div>
            <div className="badge51">
              <div className="badge-base51">
                <div className="text63">Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post-card18">
        <img className="image-icon28" alt="" src="/image-22@2x.png" />
        <div className="blog-post-card18">
          <div className="heading-and-text21">
            <div className="author16">Sunday , 1 Jan 2023</div>
            <div className="heading-and-text22">
              <div className="heading31">Building your API Stack</div>
              <div className="supporting-text63">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </div>
            </div>
          </div>
          <div className="categories20">
            <div className="badge50">
              <div className="badge-base52">
                <div className="text62">Design</div>
              </div>
            </div>
            <div className="badge51">
              <div className="badge-base51">
                <div className="text63">Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogPostCard4 image="/image-32@2x.png" />
      <BlogPostCard2
        propAlignSelf="stretch"
        image="/image-41@2x.png"
        heading="PM mental models"
        propMinWidth="169px"
        supportingText="Mental models are simple expressions of complex processes or relationships."
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#f0f9ff"
        text="Product"
        propColor="#026aa2"
        propBackgroundColor1="#eef4ff"
        text1="Research"
        propColor1="#3538cd"
        propDisplay="inline-block"
        propMinWidth2="64px"
        propFlex1="1"
        propMinWidth3="67px"
        propBackgroundColor2="#fff6ed"
        text2="Frameworks"
        propColor2="#c4320a"
      />
      <BlogPostCard
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image-51@2x.png"
        propHeight="240px"
        author="Sunday , 1 Jan 2023"
        showAuthor
        propAlignSelf1="stretch"
        heading="What is Wireframing?"
        propMinWidth1="197px"
        supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
        propFlex1="1"
        propFlex2="1"
        propFlex3="unset"
        propMinWidth2="unset"
        text="Research"
        propMinWidth3="69px"
        text1="Presentation"
      />
      <BlogPostCard
        propFlex="unset"
        propMinWidth="unset"
        propAlignSelf="stretch"
        image="/image-61@2x.png"
        propHeight="240px"
        author="Sunday , 1 Jan 2023"
        showAuthor
        propAlignSelf1="stretch"
        heading="How collaboration makes us better designers"
        propMinWidth1="196px"
        supportingText="Collaboration can make our teams stronger, and our individual designs better."
        propFlex1="1"
        propFlex2="1"
        propFlex3="unset"
        propMinWidth2="unset"
        text="Research"
        propMinWidth3="69px"
        text1="Presentation"
      />
      <BlogPostCard2
        propAlignSelf="stretch"
        image="/image-71@2x.png"
        heading="Our top 10 Javascript frameworks to use"
        propMinWidth="196px"
        supportingText="JavaScript frameworks make development easy with extensive features and functionalities."
        propFlex="1"
        propMinWidth1="113px"
        propBackgroundColor="#ecfdf3"
        text="Software Development"
        propColor="#037a48"
        propBackgroundColor1="#fdf2fa"
        text1="Tools"
        propColor1="#c11574"
        propDisplay="unset"
        propMinWidth2="unset"
        propFlex1="unset"
        propMinWidth3="unset"
        propBackgroundColor2="#fff1f3"
        text2="SaaS"
        propColor2="#c11048"
      />
      <BlogPostCard3
        propAlignSelf="stretch"
        image="/image-81@2x.png"
        propMinWidth="196px"
        propDisplay="inline-block"
        propMinWidth1="127px"
      />
      <div className="blog-post-card18">
        <img className="image-icon28" alt="" src="/image-22@2x.png" />
        <div className="blog-post-card18">
          <div className="heading-and-text21">
            <div className="author16">Sunday , 1 Jan 2023</div>
            <div className="heading-and-text22">
              <div className="heading31">Building your API Stack</div>
              <div className="supporting-text63">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </div>
            </div>
          </div>
          <div className="categories20">
            <div className="badge50">
              <div className="badge-base52">
                <div className="text62">Design</div>
              </div>
            </div>
            <div className="badge51">
              <div className="badge-base51">
                <div className="text63">Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogPostCard4 image="/image-32@2x.png" />
      <BlogPostCard2
        propAlignSelf="stretch"
        image="/image-41@2x.png"
        heading="PM mental models"
        propMinWidth="169px"
        supportingText="Mental models are simple expressions of complex processes or relationships."
        propFlex="unset"
        propMinWidth1="unset"
        propBackgroundColor="#f0f9ff"
        text="Product"
        propColor="#026aa2"
        propBackgroundColor1="#eef4ff"
        text1="Research"
        propColor1="#3538cd"
        propDisplay="inline-block"
        propMinWidth2="64px"
        propFlex1="1"
        propMinWidth3="67px"
        propBackgroundColor2="#fff6ed"
        text2="Frameworks"
        propColor2="#c4320a"
      />
    </div>
  );
};

Column.propTypes = {
  className: PropTypes.string,
};

export default Column;
