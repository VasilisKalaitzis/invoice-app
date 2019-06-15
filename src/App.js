import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./components/Routes/index";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div className="App color-pallete1"><Invoices /></div> */}
        <Routes />
      </Provider>
    );
  }
}

export default App;
