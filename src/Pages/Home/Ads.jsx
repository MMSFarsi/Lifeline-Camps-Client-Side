import React from 'react';

const Ads = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-white">
      <div className="bg-[#f077e0] p-4 md:p-6 lg:p-7 flex items-center">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/hospital-room--v1.png" alt="hospital-room" />
        <div className="ml-4">
          <p className="font-semibold text-lg">Best Medical Services</p>
          <p className="text-sm">Get your services now from us</p>
        </div>
      </div>
      <div className="bg-[#c768ba] p-4 md:p-6 lg:p-7 flex items-center">
      <img width="50" height="50" src="https://img.icons8.com/wired/50/FFFFFF/warranty-card.png" alt="warranty-card"/>
        <div className="ml-4">
          <p className="font-semibold text-lg">Quality Healthcare</p>
          <p className="text-sm">Your health, our priority</p>
        </div>
      </div>
      <div className="bg-[#f077e0] p-4 md:p-6 lg:p-7 flex items-center">
      <img width="50" height="50" src="https://img.icons8.com/quill/50/FFFFFF/phone-disconnected.png" alt="phone-disconnected"/>
        <div className="ml-4">
          <p className="font-semibold text-lg">Emergency Case</p>
          <p className="text-sm">Call at +880 16283-28383</p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
