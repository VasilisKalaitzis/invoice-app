import React, { Component } from "react";

// state managment
import { connect } from "react-redux";
import { fetchInvoiceDataById } from "../../actions/invoiceActions";

//libraries
import { getUrlParameter } from "../../helperFunctions/helpers.js";

// components
import TableTemplate from "../TableTemplate";
import DetailCard from "../DetailCard";
import AppHeader from "../AppHeader";

// css
import "./invoice.css";

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

  render() {
    console.log(JSON.stringify(this.props));
    return (
      <div className="invoice-container flexcontainer">
        {/*  header here */}
        <AppHeader title={"INVOICE #" + this.invoiceId} />

        {/* body here */}
        <div className="sub-app color-pallete2">
          {this.props.invoices.hasOwnProperty(this.invoiceId)
            ? [
                <div class="flexcontainer-block xs-12">
                  <div key="invoice_date">
                    {" "}
                    invoiceDate:{" "}
                    {this.props.invoices[this.invoiceId].invoiceDate}
                  </div>
                  <div key="pay_by">
                    {" "}
                    payBy: {this.props.invoices[this.invoiceId].payBy}
                  </div>
                  <div key="account">
                    {" "}
                    account: {this.props.invoices[this.invoiceId].account}
                  </div>
                </div>,
                // sender - receiver info
                <div className="flexcontainer-block xs-6">
                  <DetailCard
                    position="left"
                    key="p_details_sender"
                    details={this.props.invoices[this.invoiceId].sender}
                  />
                </div>,
                <div className="flexcontainer-block xs-6">
                  <DetailCard
                    position="right"
                    key="p_details_receiver"
                    details={this.props.invoices[this.invoiceId].receiver}
                  />
                </div>,
                // items
                <div className="flexcontainer-block xs-12">
                  <TableTemplate
                    key="table_template_invoice"
                    id="table_template_invoice"
                    columns={[
                      { label: "description" },
                      { label: "qty" },
                      { label: "vat" },
                      { label: "price", prefix: "$" }
                    ]}
                    colHeaders={["Product", "Unit", "VAT", "Price"]}
                    dataSource={this.props.invoices[this.invoiceId].lines}
                    aggregates={[
                      {
                        type: "text",
                        label: "Total",
                        value:
                          "$" + this.props.invoices[this.invoiceId].totalPrice
                      }
                    ]}
                  />
                </div>
              ]
            : null}
        </div>
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
