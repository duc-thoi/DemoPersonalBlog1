import BlogPostCard1 from "./BlogPostCard1";
import BlogPostCard2 from "./BlogPostCard2";
import BlogPostCard from "./BlogPostCard";
import BlogPostCard3 from "./BlogPostCard3";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import "./FeaturedInner.css";

const FeaturedInner = ({ className = "" }) => {
  return (
    <div className={`featured-inner ${className}`}>
      <div className="heading-and-content1">
        <h2 className="heading18">All blog posts</h2>
        <div className="content38">
          <div className="row2">
            <BlogPostCard1 image="/image1@2x.png" />
            <BlogPostCard2
              image="/image-5@2x.png"
              heading="PM mental models"
              supportingText="Mental models are simple expressions of complex processes or relationships."
              text="Product"
              text1="Research"
              text2="Frameworks"
            />
            <BlogPostCard
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="unset"
              image="/image-6@2x.png"
              propHeight="240px"
              author="Sunday , 1 Jan 2023"
              showAuthor
              propAlignSelf1="stretch"
              heading="What is Wireframing?"
              propMinWidth1="198px"
              supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
              propFlex1="1"
              propFlex2="1"
              propFlex3="unset"
              propMinWidth2="unset"
              text="Research"
              propMinWidth3="69px"
              text1="Presentation"
            />
          </div>
          <div className="row2">
            <BlogPostCard
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="unset"
              image="/image-7@2x.png"
              propHeight="240px"
              author="Sunday , 1 Jan 2023"
              showAuthor
              propAlignSelf1="stretch"
              heading="How collaboration makes us better designers"
              propMinWidth1="224px"
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
              propAlignSelf="unset"
              image="/image-8@2x.png"
              heading="Our top 10 Javascript frameworks to use"
              propMinWidth="197px"
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
            <BlogPostCard3 image="/image-9@2x.png" />
          </div>
        </div>
      </div>
      <Pagination arrowLeft="/arrowleft.svg" arrowRight="/arrowright.svg" />
    </div>
  );
};

FeaturedInner.propTypes = {
  className: PropTypes.string,
};

export default FeaturedInner;
