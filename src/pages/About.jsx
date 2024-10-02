import FrameComponent7 from "../components/FrameComponent7";
import Container from "../components/Container";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <FrameComponent7 />
      <div className="container-container">
        <div className="container4">
          <h1 className="john-doe">John Doe</h1>
        </div>
      </div>
      <main className="section">
        <Container />
      </main>
      <div className="footer2">
        <div className="container5">
          <a className="a">© 2023</a>
          <div className="menu3">
            <a className="twitter2">{`Twitter `}</a>
            <a className="linkedin2">LinkedIn</a>
            <a className="email2">Email</a>
            <a className="rss-feed2">RSS feed</a>
            <div className="add-to-feedly2">Add to Feedly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
