import useAuth from "@/Hooks/useAuth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import React, { useState } from "react";
import { useForm } from "react-hook-form";


const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddCamp = () => {
  const { register, handleSubmit, formState: { errors },} = useForm();
  const axiosPublic=useAxiosPublic()
  const{user}=useAuth()
  const [imagePreview, setImagePreview] = useState(null);
    const onSubmit = async (data) => {
    console.log(data);
    // image uploat to bb and get url
    const imageFile={image: data.image[0]}
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
    if(res.data.success){
        // send to db
        const campDetails={
            campName:data.campName,
            campFees:parseFloat(data.campFees),
            dateTime:data.dateTime,
            description:data.description,
            healthcareProfessionalName:data.healthcareProfessionalName,
            location:data.location,
            participantCount:0,
            image:res.data.data.display_url,
            AdminName: user.email,
        }

        const campRes= await axiosPublic.post('/camps',campDetails);
        console.log(campRes.data);
    }
    console.log('image url',res.data);


   
  };


  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add A Camp</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Camp Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Camp Name</label>
          <input
            type="text"
            {...register("campName", { required: "Camp name is required" })}
            placeholder="Enter Camp Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.campName && (
            <span className="text-sm text-red-500">{errors.campName.message}</span>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            onChange={handleImagePreview}
            className="mt-1"
            accept="image/*"
          />
          {errors.image && (
            <span className="text-sm text-red-500">{errors.image.message}</span>
          )}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full h-40 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Camp Fees */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Camp Fees (in $)</label>
          <input
            type="number"
            {...register("campFees", {
              required: "Camp fees are required",
              min: { value: 0, message: "Fees must be greater than or equal to 0" },
            })}
            placeholder="Enter Camp Fees"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.campFees && (
            <span className="text-sm text-red-500">{errors.campFees.message}</span>
          )}
        </div>

        {/* Date & Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", { required: "Date and time are required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.dateTime && (
            <span className="text-sm text-red-500">{errors.dateTime.message}</span>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            placeholder="Enter Location"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.location && (
            <span className="text-sm text-red-500">{errors.location.message}</span>
          )}
        </div>

        {/* Healthcare Professional Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Healthcare Professional Name
          </label>
          <input
            type="text"
            {...register("healthcareProfessionalName", {
              required: "Healthcare professional name is required",
            })}
            placeholder="Enter Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.healthcareProfessionalName && (
            <span className="text-sm text-red-500">
              {errors.healthcareProfessionalName.message}
            </span>
          )}
        </div>

        {/* Participant Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Participant Count</label>
          <input
            type="number"
            value={0}
            disabled
            className="w-full mt-1 p-2 bg-gray-100 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter Camp Description"
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">{errors.description.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Add Camp
        </button>
      </form>
    </div>
  );
};

export default AddCamp;
