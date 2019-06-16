import { FETCH_INVOICE_BY_ID } from "./types";

import invoiceData from "../static_data/invoice-data";

// fetch invoice by its ID
// request: server invoice
// parameters:
//        invoiceId intereger
export const fetchInvoiceDataById = invoiceId => (dispatch, getState) => {
  // PR Notes: Architecture Decision
  // 1) using cache currently has negative value due to the lack of navigation control
  // 2) when we will add navigation and when we will have to send multiple requests
  // it will get a lot of value
  // (e.g fetch invoice from invoice_list, send real time notification to change
  // the invoice status from pending to viewed, easy offline mode integration e.t.c)
  let cachedInvoices = getState().invoiceReducer.invoices;
  // add the invoice to the invoices list. We don't need to do anything if it already exists
  if (cachedInvoices[invoiceId] === undefined) {
    let baseUrl = window.env_config.invoiceUrl;
    // fetch data from the api and put them into the list

    for (let i = 0; i < invoiceData.length; i++) {
      if (invoiceData[i].invoiceId == invoiceId) {
        dispatch({
          type: FETCH_INVOICE_BY_ID,
          payload: {
            newInvoice: invoiceData[i]
          }
        });
      }
    }
  }
};
