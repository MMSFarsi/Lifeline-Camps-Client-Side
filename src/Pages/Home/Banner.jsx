
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Slide, Fade } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Banner = () => {

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        
          <SwiperSlide>
            <div className="relative h-fit sm:h-[60vh] md:h-[80vh] lg:h-[85vh]">
              <Fade duration={1000} triggerOnce>
                <img
                  src="https://i.ibb.co.com/3SzqcDY/men-women-hospital-gowns-study.jpg"
                  alt='ok'
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
                  {/* <Slide direction="up" duration={1000} triggerOnce>
                    <span className="bg-green-500 text-white font-semibold px-4 py-1 rounded-sm text-xs sm:text-sm md:text-base">
                      OKAY
                    </span>
                  </Slide> */}
                  <br />
                
                  <Slide direction="up" duration={1000} triggerOnce>
                    <h2 className="mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Effortless Medical Camp Management
                    </h2>
                  </Slide>
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="flex items-center mb-1 text-xs sm:text-sm md:text-base">
                    Organize, manage, and track all your medical camps in one place with our cutting-edge solution.
                    </span>
                  </Slide>
                  {/* <div className="text-xs sm:text-sm md:text-base">
                    <Slide direction="up" duration={1000} triggerOnce>
                      <span className="flex gap-1 items-center">
                       SALMAN
                      </span>
                    </Slide>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-fit sm:h-[60vh] md:h-[80vh] lg:h-[85vh]">
              <Fade duration={1000} triggerOnce>
                <img
                  src="https://i.ibb.co.com/6RTfZKQ/shopper-chemist-store-checkout-counter-using-credit-card-purchase-pharmaceutical-products-friendly-c.jpg"
                  alt='ok'
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
                  {/* <Slide direction="up" duration={1000} triggerOnce>
                    <span className="bg-green-500 text-white font-semibold px-4 py-1 rounded-sm text-xs sm:text-sm md:text-base">
                      OKAY
                    </span>
                  </Slide> */}
                  <br />
                
                  <Slide direction="up" duration={1000} triggerOnce>
                    <h2 className="mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Effortless Medical Camp Management
                    </h2>
                  </Slide>
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="flex items-center mb-1 text-xs sm:text-sm md:text-base">
                    Organize, manage, and track all your medical camps in one place with our cutting-edge solution.
                    </span>
                  </Slide>
                  {/* <div className="text-xs sm:text-sm md:text-base">
                    <Slide direction="up" duration={1000} triggerOnce>
                      <span className="flex gap-1 items-center">
                       SALMAN
                      </span>
                    </Slide>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-fit sm:h-[60vh] md:h-[80vh] lg:h-[85vh]">
              <Fade duration={1000} triggerOnce>
                <img
                  src="https://i.ibb.co.com/Qnkp8ZV/paramedics-examining-injured-boy.jpg"
                  alt='ok'
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
                  {/* <Slide direction="up" duration={1000} triggerOnce>
                    <span className="bg-green-500 text-white font-semibold px-4 py-1 rounded-sm text-xs sm:text-sm md:text-base">
                      OKAY
                    </span>
                  </Slide> */}
                  <br />
                
                  <Slide direction="up" duration={1000} triggerOnce>
                    <h2 className="mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Effortless Medical Camp Management
                    </h2>
                  </Slide>
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="flex items-center mb-1 text-xs sm:text-sm md:text-base">
                    Organize, manage, and track all your medical camps in one place with our cutting-edge solution.
                    </span>
                  </Slide>
                  {/* <div className="text-xs sm:text-sm md:text-base">
                    <Slide direction="up" duration={1000} triggerOnce>
                      <span className="flex gap-1 items-center">
                       SALMAN
                      </span>
                    </Slide>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;
