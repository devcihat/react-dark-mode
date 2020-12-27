import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { lightTheme, darkTheme } from "./theme/theme";

export default function App() {
  const [themeObj, setThemeObj] = React.useState(lightTheme);

  function themeHandler() {
    setThemeObj(themeObj.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <Router>
      <div className={`${themeObj.bgColor} ${themeObj.textColor}`}>
        <div>
          <Navbar />
          <Switch>
            <Route path="/Home">
              <Home themeObj={themeObj} />
            </Route>
            <Route path="/About">
              <About themeObj={themeObj} />
            </Route>
            <Route path="/Contact">
              <Contact themeObj={themeObj} />
            </Route>
          </Switch>
          <Footer themeObj={themeObj} themeHandler={themeHandler} />
        </div>
      </div>
    </Router>
  );
}
