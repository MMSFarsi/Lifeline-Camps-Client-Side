import React from 'react'
import { Link } from 'react-router-dom'

const Promotion = () => {
  return (
    <section className=" text-white bg-[#B354A6] text-center py-12">
    <h2 className="text-3xl font-bold">Limited-Time Discounts!</h2>
    <p className="mt-3 mb-4 text-lg">Register now and get 20% off on select healthcare camps.</p>
    <Link to={'available-camps'} className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-md">Book Now</Link>
  </section>
  )
}

export default Promotion