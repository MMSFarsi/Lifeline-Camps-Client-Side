import React, { useState } from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '@/Hooks/useAuth';
import toast from 'react-hot-toast';

const AddReview = () => {
  const axiosPublic = useAxiosPublic();
  const navigate=useNavigate()
  const {user}=useAuth()
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const{id}=useParams()
  

  const handleSubmit =  (e) => {
    e.preventDefault();
    const reviewData = { reviewAuthor:user?.displayName,authImg:user?.photoURL,regCampId:id,review, rating };
    axiosPublic.post('/reviews', reviewData)
    .then(res=>{
  
      if(res.data.result.insertedId){
        toast.success('Review Added')
        navigate('/dashboard/registeredCamps')
      }
    })
  }
     

  return (
    <div className="max-w-lg mx-auto p-6  rounded-lg">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Add a Review</h2>
      <form className='p-5 mx-auto lg:p-10 border-2 border-blue-500 shadow-md bg-white  w-[400px]  lg:w-[500px]' onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="review">
            Your Review
          </label>
          <textarea
            id="review"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
            Rating (1 to 5)
          </label>
          <input
            type="number"
            id="rating"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#B354A6] text-white py-2 rounded-md  "
        >
          Submit Review
        </button>
      </form>
      
    </div>
  );
};

export default AddReview;
