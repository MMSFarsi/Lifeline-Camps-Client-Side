import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) { toast.error('Please enter a valid email!', { position: 'top-right' });
      return;
    } toast.success('Subscribed successfully! ', { position: 'top-right' });
    setEmail(''); 
  };

  return (
    <section className="text-white bg-[#B354A6] text-center py-12 px-4">
      <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
      <p className="mt-3 mb-4 text-lg">Get the latest updates and exclusive healthcare offers.</p>

      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
        <input type="email"    placeholder="Enter your email"  value={email}  onChange={(e) => setEmail(e.target.value)} className="w-full md:w-72 p-3 rounded-md text-black focus:ring focus:ring-white outline-none" />
        <button type="submit"  className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">  Subscribe</button>
      </form>
      <Toaster />
    </section>
  );
};

export default Newsletter;
