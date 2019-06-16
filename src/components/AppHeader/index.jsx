import React, { Component } from "react";

//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./appHeader.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="header-container color-pallete1">
        <span className="inline-block back-button-font">
          <FontAwesomeIcon icon="chevron-left" />
        </span>
        {this.props.title}
      </div>
    );
  }
}

export default AppHeader;

// Dependencies
// Libraries:
//      React Font Awesome
