import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'

const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT)
const Payment = () => {
  return (
    <div>
  
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    </div>
  )
}

export default Payment