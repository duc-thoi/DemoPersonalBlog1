import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Section3 from "../components/Section3";
import HeadingAndIcon from "../components/HeadingAndIcon";
import Pagination from "../components/Pagination";
import "./LigthMode.css";

const LigthMode = () => {
  const navigate = useNavigate();

  const onToggleModeContainerClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  return (
    <div className="ligth-mode">
      <section className="header1">
        <header className="navbar2">
          <a className="your-name2">Your Name</a>
          <div className="menu7">
            <div className="blog2">
              <a className="blog3">Blog</a>
            </div>
            <div className="blog2">
              <a className="blog3">Projects</a>
            </div>
            <div className="blog2">
              <a className="blog3">About</a>
            </div>
            <div className="blog2">
              <a className="newsletter4">Newsletter</a>
            </div>
            <div className="toggle-mode1" onClick={onToggleModeContainerClick}>
              <img
                className="iconoutlinesun1"
                loading="lazy"
                alt=""
                src="/iconoutlinesun1.svg"
              />
              <div className="iconoutlinemoon1">
                <img className="iconoutlinesun1" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </header>
        <div className="container11">
          <b className="the-blog2">THE BLOG</b>
        </div>
      </section>
      <div className="header-section1">
        <div className="container12">
          <div className="content10">
            <div className="heading-and-supporting-text2">
              <div className="heading-and-subheading2">
                <div className="subheading2">Our blog</div>
                <div className="heading4">Stories and interviews</div>
              </div>
              <div className="supporting-text42">
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className="email-capture2">
              <div className="input-field2">
                <div className="input-field-base2">
                  <div className="input-with-label2">
                    <div className="label2">Email</div>
                    <div className="input2">
                      <div className="content11">
                        <img className="mail-icon1" alt="" src="/mail.svg" />
                        <div className="text10">Enter your email</div>
                      </div>
                      <img className="help-icon2" alt="" src="/help-icon.svg" />
                    </div>
                  </div>
                  <div className="hint-text2">
                    {`We care about your data in our `}
                    <span className="privacy-policy2">privacy policy</span>
                  </div>
                </div>
              </div>
              <div className="button6">
                <div className="button-base2">
                  <div className="text11">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section3 />
      <section className="section-wrapper">
        <div className="section2">
          <div className="container13">
            <div className="content12">
              <div className="blog-post-card2">
                <img
                  className="image-icon12"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <div className="content13">
                  <div className="heading-and-text">
                    <div className="author1">Olivia Rhye • 1 Jan 2023</div>
                    <div className="heading-and-icon">
                      <h2 className="heading5">
                        Grid system for better Design User Interface
                      </h2>
                      <div className="icon-wrap">
                        <img
                          className="arrow-up-right-icon"
                          loading="lazy"
                          alt=""
                          src="/arrowupright.svg"
                        />
                      </div>
                    </div>
                    <div className="supporting-text43">
                      A grid system is a design tool used to arrange content on
                      a webpage. It is a series of vertical and horizontal lines
                      that create a matrix of intersecting points, which can be
                      used to align and organize page elements. Grid systems are
                      used to create a consistent look and feel across a
                      website, and can help to make the layout more visually
                      appealing and easier to navigate.
                    </div>
                  </div>
                  <div className="categories4">
                    <div className="badge9">
                      <div className="badge-base9">
                        <div className="text12">Design</div>
                      </div>
                    </div>
                    <div className="badge10">
                      <div className="badge-base10">
                        <div className="tag-name">Interface</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-container-wrapper">
        <div className="content-container">
          <div className="heading-and-content">
            <h2 className="heading6">All blog posts</h2>
            <div className="content14">
              <div className="row">
                <div className="blog-post-card3">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image1@2x.png"
                  />
                  <div className="content15">
                    <div className="heading-and-subheading2">
                      <div className="author1">Alec Whitten • 1 Jan 2023</div>
                      <div className="heading-and-icon1">
                        <h2 className="heading7">
                          Bill Walsh leadership lessons
                        </h2>
                        <div className="icon-wrap">
                          <img
                            className="arrow-up-right-icon"
                            loading="lazy"
                            alt=""
                            src="/arrowupright.svg"
                          />
                        </div>
                      </div>
                      <div className="supporting-text43">
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                      </div>
                    </div>
                    <div className="categories5">
                      <div className="badge9">
                        <div className="badge-base9">
                          <div className="tag-name">Leadership</div>
                        </div>
                      </div>
                      <div className="badge12">
                        <div className="badge-base12">
                          <div className="tag-name">Management</div>
                        </div>
                      </div>
                      <div className="badge13">
                        <div className="badge-base13">
                          <div className="text16">Presentation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post-card3">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                  <div className="content16">
                    <div className="heading-and-text">
                      <div className="author1">Demi WIlkinson • 1 Jan 2023</div>
                      <div className="heading-and-icon2">
                        <h2 className="heading8">PM mental models</h2>
                        <div className="icon-wrap">
                          <img
                            className="arrow-up-right-icon"
                            loading="lazy"
                            alt=""
                            src="/arrowupright.svg"
                          />
                        </div>
                      </div>
                      <div className="supporting-text43">
                        Mental models are simple expressions of complex
                        processes or relationships.
                      </div>
                    </div>
                    <div className="categories6">
                      <div className="badge9">
                        <div className="badge-base14">
                          <div className="tag-name">Product</div>
                        </div>
                      </div>
                      <div className="badge15">
                        <div className="badge-base15">
                          <div className="tag-name1">Research</div>
                        </div>
                      </div>
                      <div className="badge16">
                        <div className="badge-base16">
                          <div className="tag-name">Frameworks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post-card3">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <div className="content16">
                    <div className="heading-and-text">
                      <div className="author1">Candice Wu • 1 Jan 2023</div>
                      <div className="heading-and-icon2">
                        <h2 className="heading9">What is Wireframing?</h2>
                        <div className="icon-wrap">
                          <img
                            className="arrow-up-right-icon"
                            loading="lazy"
                            alt=""
                            src="/arrowupright.svg"
                          />
                        </div>
                      </div>
                      <div className="supporting-text43">
                        Introduction to Wireframing and its Principles. Learn
                        from the best in the industry.
                      </div>
                    </div>
                    <div className="categories7">
                      <div className="badge9">
                        <div className="badge-base9">
                          <div className="text12">Design</div>
                        </div>
                      </div>
                      <div className="badge18">
                        <div className="badge-base15">
                          <div className="tag-name">Research</div>
                        </div>
                      </div>
                      <div className="badge13">
                        <div className="badge-base13">
                          <div className="text16">Presentation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="blog-post-card3">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                  <div className="content16">
                    <div className="heading-and-text">
                      <div className="author1">Natali Craig • 1 Jan 2023</div>
                      <HeadingAndIcon heading="How collaboration makes us better designers" />
                      <div className="supporting-text43">
                        Collaboration can make our teams stronger, and our
                        individual designs better.
                      </div>
                    </div>
                    <div className="categories7">
                      <div className="badge9">
                        <div className="badge-base9">
                          <div className="text12">Design</div>
                        </div>
                      </div>
                      <div className="badge18">
                        <div className="badge-base15">
                          <div className="tag-name">Research</div>
                        </div>
                      </div>
                      <div className="badge13">
                        <div className="badge-base13">
                          <div className="text16">Presentation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post-card3">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image-8@2x.png"
                  />
                  <div className="content16">
                    <div className="heading-and-text">
                      <div className="author1">Drew Cano • 1 Jan 2023</div>
                      <HeadingAndIcon
                        heading="Our top 10 Javascript frameworks to use"
                        propMinWidth="197px"
                      />
                      <div className="supporting-text43">
                        JavaScript frameworks make development easy with
                        extensive features and functionalities.
                      </div>
                    </div>
                    <div className="categories9">
                      <div className="badge23">
                        <div className="badge-base23">
                          <div className="tag-name">Software Development</div>
                        </div>
                      </div>
                      <div className="badge24">
                        <div className="badge-base10">
                          <div className="tag-name">Tools</div>
                        </div>
                      </div>
                      <div className="badge25">
                        <div className="badge-base25">
                          <div className="tag-name">SaaS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-post-card3">
                  <img
                    className="image-icon13"
                    loading="lazy"
                    alt=""
                    src="/image-9@2x.png"
                  />
                  <div className="content16">
                    <div className="heading-and-text">
                      <div className="author1">Orlando Diggs • 1 Jan 2023</div>
                      <HeadingAndIcon
                        heading="Podcast: Creating a better CX Community"
                        propMinWidth="224px"
                      />
                      <div className="supporting-text43">
                        Starting a community doesn’t need to be complicated, but
                        how do you get started?
                      </div>
                    </div>
                    <div className="categories10">
                      <div className="badge9">
                        <div className="badge-base9">
                          <div className="tag-name1">Podcasts</div>
                        </div>
                      </div>
                      <div className="badge27">
                        <div className="badge-base12">
                          <div className="tag-name">Customer Success</div>
                        </div>
                      </div>
                      <div className="badge13">
                        <div className="badge-base13">
                          <div className="text16">Presentation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination
            propBorderTop="1px solid #eaecf0"
            arrowLeft="/arrowleft1.svg"
            propColor="#667085"
            propColor1="#7e56d9"
            propColor2="#667085"
            propColor3="#667085"
            propColor4="#667085"
            propColor5="#667085"
            propColor6="#667085"
            propColor7="#667085"
            propColor8="#667085"
            arrowRight="/arrowright1.svg"
          />
        </div>
      </section>
      <section className="footer5">
        <div className="container14">
          <div className="div3">© 2023</div>
          <div className="menu8">
            <h3 className="twitter5">{`Twitter `}</h3>
            <h3 className="linkedin5">LinkedIn</h3>
            <h3 className="email5">Email</h3>
            <h3 className="rss-feed5">RSS feed</h3>
            <h3 className="add-to-feedly5">Add to Feedly</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LigthMode;
