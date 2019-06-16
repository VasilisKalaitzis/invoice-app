import React, { Component } from "react";

//libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css
import "./beautyFields.css";

class BeautyFields extends Component {
  renderIcon(type) {
    switch (type) {
      case "text":
      case "textbox":
        return <FontAwesomeIcon icon="book" />;
      case "date":
        return <FontAwesomeIcon icon="calendar-alt" />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="beauty-field-container">
        <span className="beauty-field-fa-container">
          {this.renderIcon(this.props.type)}
        </span>
        <span className="beauty-field-value">{this.props.value}</span>
      </div>
    );
  }
}

export default BeautyFields;

// Dependencies
// Libraries:
//      React Font Awesome
