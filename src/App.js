import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import CARD_LIST from "./data/card_list";
import CardComp from "./components/Card";
import { lightTheme, darkTheme } from "./theme/themeColor";

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
            <Route path="/Card">
              <div className="container">
                <div className="row pt-5">
                  {CARD_LIST.map((item, index) => {
                    return <CardComp id={index} item={item} like={item.like} />;
                  })}
                </div>
              </div>
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
