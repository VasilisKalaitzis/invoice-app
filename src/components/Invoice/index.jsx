import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInvoiceDataById } from "../../actions/invoiceActions";
import { getUrlParameter } from "../../helperFunctions/helpers.js";
import "./invoice.css";
import TableTemplate from "../TableTemplate";

class Invoice extends Component {
  constructor(props) {
    super(props);
    // get the invoiceID from the URL's parameter
    if (Object.entries(this.props.match.params).length === 0) {
      // support URL format: invoice?invoiceId=:id
      this.invoiceId = getUrlParameter("invoiceId", this.props.location.search);
    } else {
      // support URL format: invoice/:id
      this.invoiceId = this.props.match.params["invoiceId"];
    }
  }

  componentDidMount() {
    // fetch new invoice from the server -> cached
    this.props.fetchInvoiceDataById(this.invoiceId);
  }

  renderDetailForm(personalDetails, key) {
    // this is subject of becoming a component on its own
    // at the moment, it doesn't have enough re-usability value
    return (
      <div key={"p_details_" + key}>
        <b>{personalDetails.name}</b>
        <br />
        {personalDetails.street}
        <br />
        {personalDetails.city}
        <br />
        {personalDetails.postalcode}
      </div>
    );
  }

  render() {
    console.log(JSON.stringify(this.props));
    return (
      <div>
        {this.props.invoices.hasOwnProperty(this.invoiceId)
          ? [
              this.renderDetailForm(
                this.props.invoices[this.invoiceId].sender,
                "sender"
              ),
              this.renderDetailForm(
                this.props.invoices[this.invoiceId].receiver,
                "receiver"
              ),
              <TableTemplate
                key="table-template-lines"
                columns={["description", "qty", "vat", "price"]}
                colHeaders={["Desc", "qty", "VAT", "Price"]}
                dataSource={this.props.invoices[this.invoiceId].lines}
              />
            ]
          : null}
      </div>
    );
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
