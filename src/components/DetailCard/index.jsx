import React, { Component } from "react";

//libraries
import PropTypes from "prop-types";

// css
import "./detailCard.css";

class DetailCard extends Component {
  render() {
    return (
      <div
        className={
          "detail-card-container detail-card-container-" + this.props.position
        }
      >
        <div className="detail-card-header">
          <p className="sm-hide detail-card-title">{this.props.title}</p>
          <p>{this.props.header}</p>
        </div>
        <ul className="detail-card-body">
          {this.props.body.map(row => {
            return <li key={"dialog_body_" + row}>{row}</li>;
          })}
        </ul>
      </div>
    );
  }
}

DetailCard.defaultProps = {
  title: "",
  position: "",
  header: null,
  body: []
};

DetailCard.propTypes = {
  title: PropTypes.string,
  position: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.array
};

export default DetailCard;

// Dependencies
// - - -
