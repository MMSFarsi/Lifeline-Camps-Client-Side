
const ContactUs = () => {
  return (
  <section className='bg-[#FCF8F8]'>
      <div className="p-6  max-w-6xl mx-auto">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border-2 rounded-sm border-blue-500  p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <input    type="text"   placeholder="Your Name" 
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input type="email"   placeholder="Your Email" 
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input  type="text"   placeholder="Subject" 
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <textarea   placeholder="Your Message"  rows="4" 
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            ></textarea>
            <p    className="px-6 py-2 w-full text-center bg-[#B354A6]  text-white font-semibold rounded-lg "  > Send Message
            </p>
          </form>
        </div>
        <div className=" border-2 bg-white rounded-sm border-blue-500   p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to us for any inquiries or assistance. We are here to help!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <p className="text-gray-700">Chattagram, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-gray-700">+880 7283-394394</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-gray-700">lifelines@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactUs;
