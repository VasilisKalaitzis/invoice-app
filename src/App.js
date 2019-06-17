import React, { Component } from "react";
import Routes from "./components/Routes/index";
import "./css/App.css";
import "./css/containers.css";
import "./css/colors.css";
import "./css/frames.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faCalendarAlt,
  faBook
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faCalendarAlt, faBook);

class App extends Component {
  render() {
    return (
      <div className="App color-pallete3">
        <Routes />
      </div>
    );
  }
}

export default App;
