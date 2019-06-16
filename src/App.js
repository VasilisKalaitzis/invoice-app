import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/Routes/index";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App color-pallete1">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
