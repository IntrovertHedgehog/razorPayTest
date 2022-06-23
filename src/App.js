import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useCallback } from "react";
import useRazorpay from "react-razorpay";

function App() {

  const Razorpay = useRazorpay();

  const handlePayment = async (params) => {
  // const order = await createOrder(params); //  Create order on your backend

  const options = {
    key: "rzp_live_7Ew5O3N1k6X8Ax", // Enter the Key ID generated from the Dashboard
    amount: "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "SGD",
    name: "Seedling EServices Pvt Ltd",
    description: "Test Transaction",
    image: "https://avatars.githubusercontent.com/u/7713209?s=200&v=4",
    order_id: "order_JklsseU1d99IQ1", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Piyush Garg",
      email: "youremail@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#fff",
    },
  };

  const rzp1 = new Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
};

  return (
    <button onClick={handlePayment}>Click</button>
  );
}

export default App;
