import React, { Component } from "react";

//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./appHeader.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="color-pallete1 flexcontainer-block xs-12">
        <div>
          <span className="inline-block back-button-font">
            <FontAwesomeIcon icon="chevron-left" />
          </span>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default AppHeader;

// Dependencies
// - - -
