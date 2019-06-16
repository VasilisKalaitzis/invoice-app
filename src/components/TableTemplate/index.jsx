import React, { Component } from "react";

// libraries
import PropTypes from "prop-types";

// css
import "./tableTemplate.css";

class tableTemplate extends Component {
  // add a list item to the table
  renderLine(line, idx) {
    return (
      <tr key={this.props.id + "_line_" + idx}>
        {this.props.columns.map(column => {
          return (
            <td key={this.props.id + "_col_" + idx + column.label}>
              {column.prefix !== undefined ? column.prefix : null}
              {line[column.label]}
              {column.suffix !== undefined ? column.suffix : null}
            </td>
          );
        })}
      </tr>
    );
  }

  // calculate aggregates from columns or add text
  renderAggregate(aggregate, idx) {
    switch (aggregate.type) {
      case "text": {
        return (
          <div key={this.props.id + "_aggregate_" + idx}>
            <span className="caption-td table-aggregate-label">
              {aggregate.label}
            </span>
            <span className="caption-td table-aggregate-value">
              {aggregate.value}
            </span>
          </div>
        );
      }
      default: {
        return null;
      }
    }
  }
  render() {
    return (
      <table className="table-template-container">
        <thead>
          <tr>
            {this.props.colHeaders.map(header => {
              return <th key={this.props.id + "_head_" + header}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.dataSource.map((line, idx) => {
            return this.renderLine(line, idx);
          })}
        </tbody>
        <caption>
          {this.props.aggregates.map((aggregate, idx) => {
            return this.renderAggregate(aggregate, idx);
          })}
        </caption>
      </table>
    );
  }
}

tableTemplate.defaultProps = {
  dataSource: [],
  aggregates: []
};

tableTemplate.propTypes = {
  dataSource: PropTypes.array,
  aggregates: PropTypes.array
};

export default tableTemplate;

// Dependencies
// - - -
