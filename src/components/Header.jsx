import React from "react";
import { Link, Router } from "react-router-dom";
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Header = () => {
  return (
    <div className={"header-container"}>
      <div className="container">
        <header className={"header"}>
          <Router history={history}>
            <div className="header-logo">
              <Link to={"/"}>{"Ashraf"}</Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>{"Home"}</Link>
                </li>

                <li>
                  <Link to={"/about"}>{"About"}</Link>
                </li>

                <li>
                  <Link to={"/service"}>{"Service"}</Link>
                </li>

                <li>
                  <Link to={"/work"}>{"Work"}</Link>
                </li>

                <li>
                  <Link to={"/resume"}>{"Resume"}</Link>
                </li>

                <li>
                  <Link to={"/contact"}>{"Contact"}</Link>
                </li>
              </ul>
            </nav>
          </Router>
        </header>
      </div>
    </div>
  );
};

export default Header;
