import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInvoiceDataById } from "../../actions/invoiceActions";
import { getUrlParameter } from "../../helperFunctions/helpers.js";
// import TableTemplate from "../TableTemplate";

class Invoice extends Component {
  constructor(props) {
    super(props);
    // get the invoiceID from the URL's parameter
    // supporting both "invoice?invoiceId=:id" and "invoice/:id"
    if (Object.entries(this.props.match.params).length === 0) {
      this.invoiceId = getUrlParameter("invoiceId", this.props.location.search);
    } else {
      this.invoiceId = this.props.match.params["invoiceId"];
    }
  }

  componentDidMount() {
    // fetch new invoice from the server -> cached
    this.props.fetchInvoiceDataById(this.invoiceId);
  }

  renderDetailForm() {
    // this is subject of becoming a component on its own
    // at the moment, it doesn't have enough re-usability value
  }

  render() {
    console.log(JSON.stringify(this.props));
    return <div />;
  }
}

const mapStateToProps = state => ({
  invoices: state.invoiceReducer.invoices
});

export default connect(
  mapStateToProps,
  { fetchInvoiceDataById }
)(Invoice);

// Dependencies
// components:
//     TableTemplate
// functions:
//     getUrlParameter from helpers.js
// style sheets:
//
