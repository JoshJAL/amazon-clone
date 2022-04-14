const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Kn8drK8xboc1Y4qWCsTFdolQL0jzBIOJlkhjaOw9h0ca5fPpnHexuR993wji3aB2mKvUh5V6jjJmxk2QXdjngIy00sypLSmmU"
);

// API

// App config

const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received >>>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency (cents in this case)
    currency: "USD",
  });

  response.status(201).send(paymentIntent.client_secret,
  );
});

// Listeners

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-ff644/us-central1/api
