import { FETCH_INVOICE_BY_ID } from "../actions/types";

const initialState = {
  invoices: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INVOICE_BY_ID:
      //adding an invoice to the invoices list
      return {
        ...state,
        invoices: {
          ...state.invoices,
          [action.payload.newInvoice.invoiceId]: action.payload.newInvoice
        }
      };
    default:
      return state;
  }
}
