import FrameComponent6 from "../components/FrameComponent6";
import BlogPostCard from "../components/BlogPostCard";
import HeadingAndText from "../components/HeadingAndText";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <FrameComponent6 />
      <main className="frame-parent5">
        <section className="container-frame">
          <div className="container6">
            <h1 className="projects1">PROJECTS</h1>
          </div>
        </section>
        <section className="section1">
          <div className="container7">
            <h2 className="heading1">List Project</h2>
            <div className="content3">
              <BlogPostCard
                propFlex="1"
                propMinWidth="385px"
                propAlignSelf="unset"
                image="/image2@2x.png"
                propHeight="330px"
                author="Olivia Rhye • 1 Jan 2023"
                showAuthor={false}
                propAlignSelf1="unset"
                heading="User Experience Design Dashboard Hotel Management"
                propMinWidth1="359px"
                supportingText="n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard."
                propFlex1="unset"
                propFlex2="unset"
                propFlex3="unset"
                propMinWidth2="unset"
                text="Research"
                propMinWidth3="69px"
                text1="Presentation"
              />
              <div className="blog-post-card">
                <img
                  className="image-icon"
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
                <div className="content4">
                  <HeadingAndText
                    author="Olivia Rhye • 1 Jan 2023"
                    showAuthor={false}
                    propAlignSelf="unset"
                    propFlexWrap="unset"
                    heading="Bring of User Experience Design to Policy Making, How to Impact Society"
                    propMinWidth="359px"
                    supportingText="User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec"
                  />
                  <div className="categories1">
                    <div className="badge">
                      <div className="badge-base">
                        <div className="text2">Design</div>
                      </div>
                    </div>
                    <div className="badge1">
                      <div className="badge-base1">
                        <div className="text3">Research</div>
                      </div>
                    </div>
                    <div className="badge2">
                      <div className="badge-base2">
                        <div className="text4">Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content5">
              <div className="blog-post-card1">
                <img
                  className="image-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
                <div className="content4">
                  <HeadingAndText
                    author="Olivia Rhye • 1 Jan 2023"
                    showAuthor={false}
                    propAlignSelf="unset"
                    propFlexWrap="wrap"
                    heading={`UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons`}
                    propMinWidth="764px"
                    supportingText="There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems"
                  />
                  <div className="categories2">
                    <div className="badge3">
                      <div className="badge-base3">
                        <div className="text5">Design</div>
                      </div>
                    </div>
                    <div className="badge4">
                      <div className="badge-base1">
                        <div className="text3">Research</div>
                      </div>
                    </div>
                    <div className="badge2">
                      <div className="badge-base2">
                        <div className="text4">Presentation</div>
                      </div>
                    </div>
                    <div className="badge6">
                      <div className="badge-base1">
                        <div className="text4">Collaboration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content7">
              <BlogPostCard
                propFlex="1"
                propMinWidth="385px"
                propAlignSelf="unset"
                image="/image-31@2x.png"
                propHeight="378px"
                author="Olivia Rhye • 1 Jan 2023"
                showAuthor={false}
                propAlignSelf1="unset"
                heading="Icon Package of Slin Icon"
                propMinWidth1="229px"
                supportingText="An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design."
                propFlex1="1"
                propFlex2="1"
                propFlex3="1"
                propMinWidth2="53px"
                text="Branding"
                propMinWidth3="46px"
                text1="Identity"
              />
              <BlogPostCard
                propFlex="1"
                propMinWidth="385px"
                propAlignSelf="unset"
                image="/image-4@2x.png"
                propHeight="378px"
                author="Olivia Rhye • 1 Jan 2023"
                showAuthor={false}
                propAlignSelf1="unset"
                heading="UX review presentations"
                propMinWidth1="225px"
                supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
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
        </section>
      </main>
      <footer className="footer3">
        <div className="container8">
          <div className="div2">© 2023</div>
          <div className="menu4">
            <a className="twitter3">{`Twitter `}</a>
            <h3 className="linkedin3">LinkedIn</h3>
            <h3 className="email3">Email</h3>
            <a className="rss-feed3">RSS feed</a>
            <h3 className="add-to-feedly3">Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
