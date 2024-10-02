import PropTypes from "prop-types";
import "./Section3.css";

const Section3 = ({ className = "" }) => {
  return (
    <section className={`section7 ${className}`}>
      <div className="container20">
        <h2 className="heading34">Recent blog posts</h2>
        <div className="content47">
          <div className="blog-post-card21">
            <img
              className="image-icon31"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="content48">
              <div className="heading-and-text27">
                <div className="author19">Olivia Rhye • 1 Jan 2023</div>
                <div className="heading-and-icon10">
                  <h2 className="heading35">UX review presentations</h2>
                  <div className="icon-wrap10">
                    <img
                      className="arrow-up-right-icon4"
                      loading="lazy"
                      alt=""
                      src="/arrowupright.svg"
                    />
                  </div>
                </div>
                <div className="supporting-text66">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </div>
              </div>
              <div className="categories22">
                <div className="badge56">
                  <div className="badge-base56">
                    <div className="text68">Design</div>
                  </div>
                </div>
                <div className="badge57">
                  <div className="badge-base57">
                    <div className="nested-badge">Research</div>
                  </div>
                </div>
                <div className="badge58">
                  <div className="badge-base58">
                    <div className="text69">Presentation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="blog-post-card22">
              <img
                className="image-icon32"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text28">
                  <div className="author19">Phoenix Baker • 1 Jan 2023</div>
                  <div className="heading-and-text29">
                    <div className="heading36">Migrating to Linear 101</div>
                    <div className="supporting-text66">
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </div>
                  </div>
                </div>
                <div className="categories23">
                  <div className="badge56">
                    <div className="badge-base59">
                      <div className="text68">Design</div>
                    </div>
                  </div>
                  <div className="badge60">
                    <div className="badge-base58">
                      <div className="text69">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-post-card22">
              <img
                className="image-icon32"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="content49">
                <div className="heading-and-text28">
                  <div className="author19">Lana Steiner • 1 Jan 2023</div>
                  <div className="heading-and-text29">
                    <div className="heading36">Building your API Stack</div>
                    <div className="supporting-text66">
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </div>
                  </div>
                </div>
                <div className="categories24">
                  <div className="badge56">
                    <div className="badge-base61">
                      <div className="text68">Design</div>
                    </div>
                  </div>
                  <div className="badge60">
                    <div className="badge-base58">
                      <div className="text69">Research</div>
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

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
