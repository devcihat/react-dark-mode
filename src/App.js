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
  const [toggleObj, setToggleObj] = React.useState(lightTheme);

  function themeHandler() {
    setToggleObj(toggleObj.theme === "light" ? darkTheme : lightTheme);
  }

  return (
    <Router>
      <div className={`${toggleObj.bgColor} ${toggleObj.textColor}`}>
        <div>
          <Navbar />
          
            <Switch>
              <Route path="/About">
                <About toggleObj={toggleObj} />
              </Route>
              <Route path="/Contact">
                <Contact toggleObj={toggleObj} />
              </Route>
              <Route path="/">
                <Home toggleObj={toggleObj} />
              </Route>
            </Switch>
          
          <Footer toggleObj={toggleObj} themeHandler={themeHandler} />
        </div>
      </div>
    </Router>
  );
}
