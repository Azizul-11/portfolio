import NavBar from "./component/NavBar";
import Home from "./component/Home";
import SocialLink from "./component/SocialLink";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLink />
    </div>
  );
}

export default App;
