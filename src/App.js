import "./styles/App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import GetToKnow from "./components/GetToKnow";
import MainNavbar from "./components/MainNavbar";
import Recent from "./components/Recent";
import "./styles/index.css";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeContext } from "./hooks/createContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <MainNavbar toggleTheme={toggleTheme} theme={theme} />
        <div className="container">
          <About />
          <GetToKnow />
          <Skills />
          <Recent />
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
