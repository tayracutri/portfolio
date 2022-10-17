import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import GetToKnow from "./components/GetToKnow";
import MainNavbar from "./components/MainNavbar";
import Recent from "./components/Recent";
import "./styles/index.css";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <MainNavbar />

      <div className="container">
        <About />
        <GetToKnow />
        <Skills />
        <Recent />
        <Contact />
      </div>
    </>
  );
}

export default App;
