import React, { Component } from "react";

// css
import "./detailCard.css";

class detailCard extends Component {
  render() {
    return (
      <div
        className={
          "detail-card-container detail-card-container-" + this.props.position
        }
      >
        <b>{this.props.details.name}</b>
        <br />
        {this.props.details.street}
        <br />
        {this.props.details.city}
        <br />
        {this.props.details.postalcode}
      </div>
    );
  }
}

export default detailCard;

// Dependencies
// - - -
