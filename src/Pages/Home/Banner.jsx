
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
   
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        
          <SwiperSlide>
            <div className="relative h-fit sm:h-[60vh] md:h-[300px] lg:h-[530px]">
              <Fade duration={1000} triggerOnce>
                <img
                  src="https://i.ibb.co.com/CQkm0Wy/medical-banner-with-doctor-wearing-stethoscope.jpg"
                  alt='ok'
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
              
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
             
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-fit sm:h-[60vh] md:h-[300px] lg:h-[530px]">
              <Fade duration={1000} triggerOnce>
                <img
                  src="https://i.ibb.co.com/BZ5kRn7/medical-banner-with-doctor-holding-stethoscope.jpg"
                  alt='ok'
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
              
                  <br />
                
                  <Slide direction="up" duration={1000} triggerOnce>
                    <h2 className="mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Where Care Meets Community
                    </h2>
                  </Slide>
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="flex items-center mb-1 text-xs sm:text-sm md:text-base">
                    Explore and register for medical camps that transform lives—yours and others.
                    </span>
                  </Slide>
              
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-fit sm:h-[60vh] md:h-[300px] lg:h-[530px]">
              <Fade duration={1000} triggerOnce>
                <img
                  src="https://i.ibb.co.com/cFBFC9n/medical-discussion.jpg"
                  alt='ok'
                  className="object-cover w-full h-full"
                />
              </Fade>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] text-white px-4 sm:px-6">
              
                  <br />
                
                  <Slide direction="up" duration={1000} triggerOnce>
                    <h2 className="mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    Lifeline Camps

                    </h2>
                  </Slide>
                  <Slide direction="up" duration={1000} triggerOnce>
                    <span className="flex items-center mb-1 text-xs sm:text-sm md:text-base">
                    Bringing care closer to you—because every life deserves a lifeline.
                    </span>
                  </Slide>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;
