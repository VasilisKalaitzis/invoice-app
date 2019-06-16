// TO BE REMOVED!!!!
const invoiceData = [
  {
    invoiceId: 1,

    sender: {
      name: "Anders Andersson",

      street: "Storgatan 1",

      city: "Göteborg",

      postalcode: "417 50"
    },

    receiver: {
      name: "SpeedLedger",

      street: "Spannmålsgatan 19",

      city: "Göteborg",

      postalcode: "411 05"
    },

    invoiceDate: "2018-01-01",

    payBy: "2018-02-01",

    lines: [
      {
        qty: 1,

        description: "bookkeeping",

        vat: 25,

        price: 199
      },

      {
        qty: "3",

        description: "invoicing service",

        vat: 5,

        price: 29
      }
    ],

    totalPrice: 286,

    account: "121212-1212"
  },
  {
    invoiceId: 2,

    sender: {
      name: "Vasilis Kalaitzissssssssssssssssssssssssssss",

      street: "Ion 28",

      city: "Marousi",

      postalcode: "4127 50"
    },

    receiver: {
      name: "Doggo",

      street: "Space 19",

      city: "Selune",

      postalcode: "41211 05"
    },

    invoiceDate: "2012-01-01",

    payBy: "2019-02-01",

    lines: [
      {
        qty: 1,

        description: "bookkeeping",

        vat: 25,

        price: 199
      },

      {
        qty: "3",

        description: "invoicing service",

        vat: 5,

        price: 29
      },

      {
        qty: "1",

        description: "Food",

        vat: 5,

        price: 2
      },

      {
        qty: "1",

        description: "Food",

        vat: 5,

        price: 2
      },

      {
        qty: "1",

        description: "Food",

        vat: 5,

        price: 2
      }
    ],

    totalPrice: 216,

    account: "121212-1212"
  }
];

export default invoiceData;
