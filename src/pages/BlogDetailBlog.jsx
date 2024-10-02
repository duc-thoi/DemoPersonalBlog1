import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Column from "../components/Column";
import "./BlogDetailBlog.css";

const BlogDetailBlog = () => {
  const navigate = useNavigate();

  const onYourNameTextClick = useCallback(() => {
    navigate("/dark-mode");
  }, [navigate]);

  const onProjectsContainerClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    navigate("/ligth-mode");
  }, [navigate]);

  return (
    <div className="blog-detail-blog">
      <header className="header">
        <div className="navbar1">
          <a className="your-name1" onClick={onYourNameTextClick}>
            Your Name
          </a>
          <div className="menu5">
            <div className="blog" onClick={onYourNameTextClick}>
              <a className="blog1">Blog</a>
            </div>
            <div className="blog" onClick={onProjectsContainerClick}>
              <a className="blog1">Projects</a>
            </div>
            <div className="about1">
              <a className="blog1">About</a>
            </div>
            <div className="about1">
              <a className="newsletter2">Newsletter</a>
            </div>
            <div className="toggle-mode">
              <img
                className="iconoutlinesun"
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div
                className="iconoutlinemoon"
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className="moon-icon"
                  loading="lazy"
                  alt=""
                  src="/moon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container9">
          <b className="the-blog1">THE BLOG</b>
        </div>
      </header>
      <main className="page-content">
        <section className="main-content1">
          <Column />
          <div className="featured-posts">
            <div className="author-wrapper">
              <div className="author">Sunday , 1 Jan 2023</div>
            </div>
            <div className="heading-wrapper">
              <h1 className="heading2">
                Grid system for better Design User Interface
              </h1>
            </div>
            <div className="featured-image">
              <img className="image-icon2" alt="" src="/image-121@2x.png" />
            </div>
            <div className="post-excerpt">
              <div className="supporting-text1">
                A grid system is a design tool used to arrange content on a
                webpage. It is a series of vertical and horizontal lines that
                create a matrix of intersecting points, which can be used to
                align and organize page elements. Grid systems are used to
                create a consistent look and feel across a website, and can help
                to make the layout more visually appealing and easier to
                navigate.
              </div>
              <div className="supporting-text1">
                If you’ve been to New York City and have walked the streets, it
                is easy to figure out how to get from one place to another
                because of the grid system that the city is built on. Just as
                the predictability of a city grid helps locals and tourists get
                around easily, so do webpage grids provide a structure that
                guides users and designers alike. Because of their consistent
                reference point, grids improve page readability and scannability
                and allow people to quickly get where they need to go.
              </div>
            </div>
            <div className="author-highlights">
              <div className="highlight-elements">
                <b className="supporting-text3">
                  Definition: A grid is made up of columns, gutters, and margins
                  that provide a structure for the layout of elements on a page.
                </b>
              </div>
              <img className="image-icon3" alt="" src="/image-131@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  Definition: A grid is made up of columns, gutters, and margins
                  that provide a structure for the layout of elements on a page.
                </div>
              </div>
              <div className="supporting-text1">
                There are three common grid types used in websites and
                interfaces: column grid, modular grid, and hierarchical grid.
              </div>
              <div className="supporting-text1">
                Column grid involves dividing a page into vertical columns. UI
                elements and content are then aligned to these columns.
              </div>
              <div className="supporting-text1">
                Modular grid extends the column grid further by adding rows to
                it. This intersection of columns and rows make up modules to
                which elements and content are aligned. Modular grids are great
                for ecommerce and listing pages, as rows are repeatable to
                accommodate browsing.
              </div>
              <div className="supporting-text1">
                Hierarchical grid: Content is organized by importance using
                columns, rows, and modules. The most important elements and
                pieces of content take up the biggest pieces of the grid.
              </div>
              <b className="supporting-text9">Breaking Down the Grid</b>
              <div className="supporting-text1">
                Regardless of the type of grid you are using, the grid is made
                up of three elements: columns, gutters, and margins.
              </div>
              <div className="supporting-text1">
                <b>Columns:</b>
                <span className="span">{` `}</span>
                <span>
                  Columns take up most of the real estate in a grid. Elements
                  and content are placed in columns. To adapt to any screen
                  size, column widths are generally defined with percentages
                  rather than fixed values and the number of columns will vary.
                  For example, a grid on a mobile device might have 4 columns
                  and a grid on a desktop might have 12 columns.
                </span>
              </div>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                <b>Gutters:</b>
                <span>
                  {" "}
                  The gutter is the space between columns that separates
                  elements and content from different columns. Gutter widths are
                  fixed values but can change based on different breakpoints.
                  For example, wider gutters are appropriate for larger screens,
                  whereas smaller gutters are appropriate for smaller screens
                  like mobile.
                </span>
              </div>
              <img className="image-icon4" alt="" src="/image-14@2x.png" />
              <div className="post-details">
                <div className="supporting-text13">
                  Three elements make up any grid: (1) columns, (2) gutters, and
                  (3) margins.
                </div>
              </div>
              <b className="supporting-text9">Examples of Grids in Use</b>
              <b className="supporting-text15">Example 1: Hierarchical Grid</b>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                {`Our first example is from `}
                <a
                  className="the-new-york-times"
                  href="https://www.nytimes.com/"
                  target="_blank"
                >
                  <span className="the-new-york">The New York Times</span>
                </a>
                . This screen utilizes a hierarchical grid to create a
                newspaper-like reading experience. At desktop screen size, two
                main columns make up the hierarchical grid. The most important
                news story takes up the most space in the grid, the left column,
                followed by secondary and tertiary stories, which take up the
                smaller column and modules on the right.
              </div>
              <img className="image-icon4" alt="" src="/image-15@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  The New York Times uses a hierarchical grid to achieve its
                  newspaper-like reading experience. (We highlighted the columns
                  in yellow, the gutters in blue, and the margins in purple.)
                </div>
              </div>
              <b className="supporting-text15">Example 2: Column Grid</b>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                {`Our second example is from `}
                <a
                  className="the-new-york-times"
                  href="https://ritual.com/"
                  target="_blank"
                >
                  <span className="the-new-york">Ritual.com</span>
                </a>
                , a vitamin company. This design uses a column grid to create an
                attractive visual experience. At this screen size, four
                consistently sized columns make up the grid structure and
                elements are aligned to and within these columns. The gutters,
                the spaces in between the columns, are also consistently sized
                and help the user visually separate the different products. The
                margins are independently sized and are the same between the
                left and right sides.
              </div>
              <img className="image-icon4" alt="" src="/image-16@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  Ritual’s four-column grid makes scanning products easy. (We
                  highlighted the columns in yellow, the gutters in blue, and
                  the margins in purple.)
                </div>
              </div>
              <b className="supporting-text15">Example 3: Modular Grid</b>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                {`Our third example is from `}
                <a
                  className="the-new-york-times"
                  href="https://www.behance.net/"
                  target="_blank"
                >
                  <span className="the-new-york">Behance</span>
                </a>
                , a design library. The site’s design uses a modular grid to
                create a pleasant browsing experience. At desktop size, rows are
                made up of 4 consistently sized modules. Horizontal gutters are
                slightly thicker than vertical gutters and the margins are
                consistently sized on the left and right of the design. Like in
                previous example, the gutters visually separate each element.
              </div>
              <img className="image-icon4" alt="" src="/image-17@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  Behance’s design uses a modular grid, which allows users to
                  easily browse. (We highlighted the columns in yellow, the
                  gutters in blue, and the margins in purple.)
                </div>
              </div>
              <b className="supporting-text15">Example 4: Breaking the Grid</b>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                {`Our last example is `}
                <a
                  className="the-new-york-times"
                  href="https://material.io/design/material-studies/shrine.html#product-architecture"
                  target="_blank"
                >
                  <span className="the-new-york">
                    Shrine from Google’s Material Studies
                  </span>
                </a>
                . This design uses a column grid, as we can see based on the
                left navigation, which is 2 columns wide. Look closely and you
                will see that some product images settle to the margins, while
                others do not. Breaking the grid like this makes it challenging
                to focus or quickly scan product images and calls more attention
                to some products over others. It is okay to break the grid every
                so often, as long as you have a valid reason for it.
              </div>
              <img className="image-icon4" alt="" src="/image-18@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  Breaking the grid produces a chaotic browsing experience for
                  users. (We highlighted the columns in yellow, the gutters in
                  blue, and the margins in purple.)
                </div>
              </div>
              <b className="supporting-text15">Benefits of the Grid</b>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                <p className="using-a-grid">
                  Using a grid benefits both end users and the designers alike:
                </p>
                <ul className="designers-can-quickly-put-toge">
                  <li className="users-can-easily-scan-predicta">
                    Designers can quickly put together well-aligned interfaces.
                  </li>
                  <li className="users-can-easily-scan-predicta">
                    Users can easily scan predictable grid-based interfaces.
                  </li>
                  <li>
                    {`A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of `}
                    <a
                      className="the-new-york-times"
                      href="https://www.nngroup.com/articles/responsive-web-design-definition/"
                      target="_blank"
                    >
                      <span className="the-new-york">
                        responsive web design
                      </span>
                    </a>
                    . Responsive design uses breakpoints to determine the screen
                    size threshold at which the layout should change. For
                    example, a desktop screen may have 12 grid columns, which
                    may be stacked on mobile so that the resulting layout has
                    only 4 columns.
                  </li>
                </ul>
              </div>
              <img className="image-icon4" alt="" src="/image-19@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  At the mobile size, Behance’s one-column grid (left) was
                  reflowed into a four-column grid structure (right).
                </div>
              </div>
              <div className="supporting-text1">
                Even more importantly, the grid is not a throw-away concept. It
                is used by both designers and developers alike. Be sure to
                communicate with your developers the grid structure used when
                creating the design, so they can implement it accordingly.
              </div>
              <b className="supporting-text9">
                Choosing and Setting Up Your Grid
              </b>
            </div>
            <div className="author-highlights">
              <div className="supporting-text1">
                How you use and set up a grid is fundamental to creating well
                thought out layouts and experiences for your user.
              </div>
              <div className="supporting-text1">
                <b>{`Choose the right grid for your needs. `}</b>
                <span>
                  Take time to think through what type of grid ­— column,
                  modular, or hierarchical — best suits your needs. A
                  hierarchical grid may be the best fit if one item on your page
                  will always be more important than the surrounding elements.
                  For example, hierarchical grids are great for online news
                  platforms. If the content you need to display is highly
                  variable, consider using a basic column or modular grid, as
                  these provide lots of flexibility when designing. For example,
                  elements and content can span across multiple columns or
                  modules or just one to fit design needs.
                </span>
              </div>
              <div className="supporting-text1">
                <b>Spend time setting up your grid.</b>
                <span>
                  {" "}
                  Once you have figured out what type of grid will work well for
                  your needs, start setting it up. Determine the number of
                  columns and the margin and gutter sizes relative to your
                  screen sizes. You will most likely want to prepare for mobile,
                  tablet, and desktop screens. A 12-column grid at laptop or
                  desktop size is generally flexible enough for most design
                  needs. The number of columns will decrease as your device size
                  decreases. Wireframing tools like Sketch and Figma have quick
                  and easy ways to set up and edit your grid, even after you
                  have started designing.
                </span>
              </div>
              <img className="image-icon4" alt="" src="/image-20@2x.png" />
              <div className="gallery-elements">
                <div className="supporting-text35">
                  Easily set the number of columns, the gutter size, and margin
                  size in Figma.
                </div>
              </div>
              <div className="supporting-text1">
                <b>Always place content within columns, not gutters.</b>
                <span>
                  {" "}
                  The gutters should remain empty as you place elements on the
                  grid in order to clearly separate and align content and
                  elements.
                </span>
              </div>
              <img className="image-icon4" alt="" src="/image-211@2x.png" />
              <div className="highlight-elements">
                <div className="supporting-text3">
                  Content or elements should be placed within and across
                  columns, not gutters.
                </div>
              </div>
              <div className="supporting-text1">
                <b>Consider using an 8px grid system.</b>
                <span>
                  {" "}
                  For most common devices, the screen size in pixels is a
                  multiple of 8. Keeping grid-component values at a multiple of
                  8 will generally make it easier to scale and implement a grid.
                </span>
              </div>
              <b className="supporting-text9">Conclusion</b>
            </div>
            <div className="supporting-text-wrapper4">
              <div className="supporting-text3">
                Grids not only provide designers a structure on which to base
                layouts, but they also improve readability and scannability for
                end users. Use a good grid system that easily adapts to various
                screen sizes.
              </div>
            </div>
            <div className="categories-wrapper">
              <div className="categories3">
                <div className="badge7">
                  <div className="badge-base7">
                    <div className="badge-label">Design</div>
                  </div>
                </div>
                <div className="badge8">
                  <div className="badge-base8">
                    <div className="text9">Interface</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content8">
              <div className="heading-and-supporting-text1">
                <div className="post-excerpt">
                  <div className="subheading1">Newlatters</div>
                  <h1 className="heading3">Stories and interviews</h1>
                </div>
                <h3 className="supporting-text41">
                  Subscribe to learn about new product features, the latest in
                  technology, solutions, and updates.
                </h3>
              </div>
              <div className="email-capture1">
                <div className="input-field1">
                  <div className="input-field-base1">
                    <div className="input-with-label1">
                      <div className="label1">Email</div>
                      <div className="input1">
                        <input
                          className="content9"
                          placeholder="Enter your email"
                          type="text"
                        />
                        <img
                          className="help-icon1"
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                    <div className="hint-text1">
                      {`We care about your data in our `}
                      <span className="the-new-york">privacy policy</span>
                    </div>
                  </div>
                </div>
                <button className="button5">
                  <div className="button-base1">
                    <div className="button-label">Subscribe</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer4">
        <div className="container10">
          <a className="a1">© 2023</a>
          <div className="menu6">
            <a className="twitter4">{`Twitter `}</a>
            <a className="linkedin4">LinkedIn</a>
            <h3 className="email4">Email</h3>
            <a className="rss-feed4">RSS feed</a>
            <h3 className="add-to-feedly4">Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailBlog;
