import BlogPostCard1 from "./BlogPostCard1";
import BlogPostCard2 from "./BlogPostCard2";
import BlogPostCard from "./BlogPostCard";
import PropTypes from "prop-types";
import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <section className={`section6 ${className}`}>
      <div className="container18">
        <div className="heading-and-content2">
          <h2 className="heading20">All blog posts</h2>
          <div className="content41">
            <div className="row4">
              <BlogPostCard1 image="/image1@2x.png" />
              <BlogPostCard2
                propAlignSelf="unset"
                image="/image-5@2x.png"
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
          </div>
        </div>
      </div>
    </section>
  );
};

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
