import Header2 from "../components/Header2";
import Section from "../components/Section";
import FrameComponent2 from "../components/FrameComponent2";
import FeaturedInner from "../components/FeaturedInner";
import "./DarkMode.css";

const DarkMode = () => {
  return (
    <div className="dark-mode">
      <div className="header-section">
        <div className="container">
          <div className="content1">
            <div className="heading-and-supporting-text">
              <div className="heading-and-subheading">
                <div className="subheading">Our blog</div>
                <div className="heading">Stories and interviews</div>
              </div>
              <div className="supporting-text">
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className="email-capture">
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Email</div>
                    <div className="input">
                      <div className="content2">
                        <img className="mail-icon" alt="" src="/mail.svg" />
                        <div className="text">Enter your email</div>
                      </div>
                      <img className="help-icon" alt="" src="/help-icon.svg" />
                    </div>
                  </div>
                  <div className="hint-text">
                    {`We care about your data in our `}
                    <span className="privacy-policy">privacy policy</span>
                  </div>
                </div>
              </div>
              <div className="button4">
                <div className="button-base">
                  <div className="text1">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header2 />
      <main className="frame-main">
        <section className="container-wrapper">
          <div className="container1">
            <b className="the-blog">THE BLOG</b>
          </div>
        </section>
        <Section />
        <FrameComponent2 />
        <section className="featured-inner-wrapper">
          <FeaturedInner />
        </section>
      </main>
      <footer className="footer">
        <div className="container2">
          <div className="div">© 2023</div>
          <div className="menu1">
            <h3 className="twitter">{`Twitter `}</h3>
            <h3 className="linkedin">LinkedIn</h3>
            <h3 className="email">Email</h3>
            <h3 className="rss-feed">RSS feed</h3>
            <h3 className="add-to-feedly">Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkMode;
