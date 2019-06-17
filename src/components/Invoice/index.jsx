import React, { Component } from "react";

// state managment
import { connect } from "react-redux";
import { fetchInvoiceDataById } from "../../actions/invoiceActions";

// libraries
import { getUrlParameter } from "../../helperFunctions/helpers.js";

// components
import TableTemplate from "../TableTemplate";
import DetailCard from "../DetailCard";
import AppHeader from "../AppHeader";
import BeautyFields from "../BeautyFields";

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

  renderDetailCard(title, details, position) {
    return (
      <DetailCard
        position={position}
        title={title}
        header={details.name}
        body={[details.street, details.city, details.postalcode]}
      />
    );
  }

  render() {
    return (
      <div className="invoice-container flexcontainer">
        {/*  header here */}
        {/* Tech Dept: This should be moved to the route */}
        <div className="xs-12">
          <AppHeader title={"INVOICE #" + this.invoiceId} />
        </div>

        {/* body here */}
        <div className="flexcontainer-block xs-12 md-6">
          <div className="sub-app color-pallete2">
            <div className="sub-app-content flexcontainer">
              {this.props.invoices.hasOwnProperty(this.invoiceId)
                ? [
                    ////////////////////////
                    // sender - receiver info
                    ////////////////////////
                    <div
                      className="flexcontainer-block xs-6 vertical-top"
                      key="p_details_sender"
                    >
                      {this.renderDetailCard(
                        "Sender",
                        this.props.invoices[this.invoiceId].sender,
                        "left"
                      )}
                    </div>,
                    <div
                      className="flexcontainer-block xs-6 vertical-top"
                      key="p_details_receiver"
                    >
                      {this.renderDetailCard(
                        "Receiver",
                        this.props.invoices[this.invoiceId].receiver,
                        "right"
                      )}
                    </div>,
                    ////////////////////////
                    // invoice details info
                    ////////////////////////
                    <div
                      className="flexcontainer-block xs-12 md-6 vertical-top"
                      key="invoice_invoiceDate"
                    >
                      <BeautyFields
                        type="date"
                        value={
                          "From " +
                          this.props.invoices[this.invoiceId].invoiceDate
                        }
                      />
                      <BeautyFields
                        type="date"
                        value={
                          "Until " + this.props.invoices[this.invoiceId].payBy
                        }
                      />
                      <BeautyFields
                        type="text"
                        value={
                          "Acc No. " +
                          this.props.invoices[this.invoiceId].account
                        }
                      />
                    </div>,
                    ////////////////////////
                    // item list
                    ////////////////////////
                    <div
                      className="flexcontainer-block xs-12"
                      key="invoice_lines"
                    >
                      <TableTemplate
                        key="table_template_invoice"
                        id="table_template_invoice"
                        columns={[
                          { label: "description" },
                          { label: "qty" },
                          { label: "vat", suffix: "%" },
                          { label: "price", prefix: "$" }
                        ]}
                        colHeaders={["Product", "Unit", "VAT", "Price"]}
                        dataSource={this.props.invoices[this.invoiceId].lines}
                        aggregates={[
                          {
                            type: "text",
                            label: "Total",
                            value:
                              "$" +
                              this.props.invoices[this.invoiceId].totalPrice
                          }
                        ]}
                      />
                    </div>
                  ]
                : null}
            </div>
          </div>
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
