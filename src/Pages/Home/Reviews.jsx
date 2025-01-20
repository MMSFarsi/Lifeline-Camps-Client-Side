import useAxiosPublic from '@/Hooks/useAxiosPublic';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosPublic.get('/reviews').then((res) => {
      setReviews(res.data);
    });
  }, []);

  return (
    <div className="py-10 ">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="p-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start h-[250px]">
            
              <p className="text-gray-600  overflow-y-scroll italic h-28 mb-4">{review.review}</p>
           
              <p className="text-yellow-500 font-bold mb-4">Rating: {review.rating} ⭐</p>
          
              <div className="flex items-center">
                <img
                  src={review.authImg}
                  alt={review.reviewAuthor}
                  className="w-8 h-8 rounded-full border border-gray-200"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-800">{review.reviewAuthor}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
