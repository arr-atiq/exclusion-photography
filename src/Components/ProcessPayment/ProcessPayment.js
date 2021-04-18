import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IhXgyGHG9rd51LXjtPYhDH4ooONwZS8ot6Te2b7qlTel4mGbO7hCzd9hITa5HxdOtrya6DVPlJXjjV8s3ebYUZq00blnMJrye');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};
export default ProcessPayment;