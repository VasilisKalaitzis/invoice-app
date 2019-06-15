import React, { Component } from "react";
import "./tableTemplate.css";

class tableTemplate extends Component {
  componentDidMount() {}

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.colHeaders.map(header => {
              return <th key={"table_template_head_" + header}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.dataSource.map(line => {
            return (
              <tr>
                {this.props.columns.map(columnName => {
                  return <td>{line[columnName]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default tableTemplate;

// Dependencies
// -
