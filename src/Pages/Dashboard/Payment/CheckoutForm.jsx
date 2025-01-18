import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError]=useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:'card',card
    })
    if(error){
        console.log('payment error',error);
        setError(error.message)
    }else{
        console.log('payment method',paymentMethod);
        setError('')
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12">
      <div className="w-full bg-slate-100 max-w-lg p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Details</label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 transition duration-200"
          >
            Pay Now
          </button>
          <p className='text-red-500'>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
