import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <section className={`container19 ${className}`}>
      <div className="blog-page-header">
        <div className="blog-post-card16">
          <img
            className="image-icon26"
            loading="lazy"
            alt=""
            src="/image11@2x.png"
          />
          <div className="content42">
            <div className="heading-and-text16">
              <div className="heading21">
                <div className="heading22">About Me</div>
              </div>
              <div className="supporting-text58">
                As a passionate and experienced UI designer, I am dedicated to
                creating intuitive and engaging user experiences that meet the
                needs of my clients and their users. I have a strong
                understanding of design principles and a proficiency in design
                tools, and I am comfortable working with cross-functional teams
                to bring projects to fruition. I am confident in my ability to
                create designs that are both visually appealing and functional,
                and I am always looking for new challenges and opportunities to
                grow as a designer.
              </div>
            </div>
          </div>
          <div className="heading-and-text16">
            <div className="heading21">
              <div className="heading22">Skills:</div>
            </div>
            <div className="supporting-text59">
              <ul className="extensive-experience-in-ui-des">
                <li className="extensive-experience-in">
                  Extensive experience in UI design, with a strong portfolio of
                  completed projects
                </li>
                <li className="extensive-experience-in">
                  Proficiency in design tools such as Adobe Creative Suite and
                  Sketch
                </li>
                <li className="extensive-experience-in">
                  Excellent visual design skills, with a strong understanding of
                  layout, color theory, and typography
                </li>
                <li className="extensive-experience-in">
                  Ability to create wireframes and prototypes to communicate
                  design concepts
                </li>
                <li className="extensive-experience-in">
                  Strong communication and collaboration skills, with the
                  ability to work effectively with cross-functional teams
                </li>
                <li className="extensive-experience-in">
                  Experience conducting user research and gathering insights to
                  inform design decisions
                </li>
                <li>Proficiency in HTML, CSS, and JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="heading-and-text16">
            <div className="heading21">
              <div className="heading22">Experience:</div>
            </div>
            <div className="supporting-text59">
              <ul className="extensive-experience-in-ui-des">
                <li className="extensive-experience-in">
                  5 years of experience as a UI designer, working on a variety
                  of projects for clients in the tech and retail industries
                </li>
                <li className="extensive-experience-in">
                  Led the design of a successful e-commerce website, resulting
                  in a 25% increase in online sales
                </li>
                <li className="extensive-experience-in">
                  Created wireframes and prototypes for a mobile banking app,
                  leading to a 20% increase in app usage
                </li>
                <li>
                  Conducted user research and usability testing to inform the
                  redesign of a healthcare provider's website, resulting in a
                  15% increase in website traffic
                </li>
              </ul>
            </div>
          </div>
          <div className="heading-and-text16">
            <div className="heading21">
              <div className="heading22">Education:</div>
            </div>
            <div className="supporting-text59">
              <ul className="extensive-experience-in-ui-des">
                <li className="extensive-experience-in">
                  Bachelor's degree in Graphic Design
                </li>
                <li>Certified User Experience Designer (CUED)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
