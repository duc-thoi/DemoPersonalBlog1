import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BlogDetailBlog from "./pages/BlogDetailBlog";
import SterlingTower from "./pages/SterlingTower";
import LoginScreen from "./pages/LoginScreen";
import ParksideMansion from "./pages/ParksideMansion";
import PrimroseHouse from "./pages/PrimroseHouse";
import RiversidePlaza from "./pages/RiversidePlaza";
import VictoriaCourt from "./pages/VictoriaCourt";
import Dashboard from "./pages/Dashboard";
import Design2Website from "./pages/Design2Website";
import IPhone from "./pages/IPhone";
import DarkMode from "./pages/DarkMode";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import Projects from "./pages/Projects";
import LigthMode from "./pages/LigthMode";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sterling-tower":
        title = "";
        metaDescription = "";
        break;
      case "/login-screen":
        title = "";
        metaDescription = "";
        break;
      case "/parkside-mansion":
        title = "";
        metaDescription = "";
        break;
      case "/primrose-house":
        title = "";
        metaDescription = "";
        break;
      case "/riverside-plaza":
        title = "";
        metaDescription = "";
        break;
      case "/victoria-court":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/1103-design-2-website":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-15":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode":
        title = "";
        metaDescription = "";
        break;
      case "/newsletter":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/projects":
        title = "";
        metaDescription = "";
        break;
      case "/ligth-mode":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BlogDetailBlog />} />
      <Route path="/sterling-tower" element={<SterlingTower />} />
      <Route path="/login-screen" element={<LoginScreen />} />
      <Route path="/parkside-mansion" element={<ParksideMansion />} />
      <Route path="/primrose-house" element={<PrimroseHouse />} />
      <Route path="/riverside-plaza" element={<RiversidePlaza />} />
      <Route path="/victoria-court" element={<VictoriaCourt />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/1103-design-2-website" element={<Design2Website />} />
      <Route path="/iphone-15" element={<IPhone />} />
      <Route path="/dark-mode" element={<DarkMode />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/ligth-mode" element={<LigthMode />} />
    </Routes>
  );
}
export default App;
