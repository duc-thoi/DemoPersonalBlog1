import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = ({ className = "" }) => {
  return (
    <section className={`section5 ${className}`}>
      <div className="container17">
        <div className="content39">
          <div className="heading-and-supporting-text3">
            <div className="heading-and-subheading3">
              <div className="subheading3">Newlatters</div>
              <h1 className="heading19">Stories and interviews</h1>
            </div>
            <h3 className="supporting-text57">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </h3>
          </div>
          <div className="email-capture3">
            <div className="input-field3">
              <div className="input-field-base3">
                <div className="input-with-label3">
                  <div className="label3">Email</div>
                  <div className="input6">
                    <div className="content40">
                      <img className="mail-icon2" alt="" src="/mail.svg" />
                      <div className="text57">Enter your email</div>
                    </div>
                    <img className="help-icon4" alt="" src="/help-icon.svg" />
                  </div>
                </div>
                <div className="hint-text3">
                  {`We care about your data in our `}
                  <span className="privacy-policy4">privacy policy</span>
                </div>
              </div>
            </div>
            <button className="button10">
              <div className="button-base5">
                <div className="text58">Subscribe</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
