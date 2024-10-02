import Header3 from "../components/Header3";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <Header3 />
      <Section1 />
      <Section2 />
      <section className="footer1">
        <div className="container3">
          <div className="div1">© 2023</div>
          <div className="menu2">
            <h3 className="twitter1">{`Twitter `}</h3>
            <h3 className="linkedin1">LinkedIn</h3>
            <h3 className="email1">Email</h3>
            <h3 className="rss-feed1">RSS feed</h3>
            <h3 className="add-to-feedly1">Add to Feedly</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
