import useAuth from "@/Hooks/useAuth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCamp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {_id,campName,campFees,dateTime,description,healthcareProfessionalName,location,participantCount,image}=useLoaderData()
 
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate=useNavigate()
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);

    // Upload image to imgBB and get URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    if (res.data.success) {
      // Send camp details to database
      const campDetails = {
        campName: data.campName,
        campFees: parseFloat(data.campFees),
        dateTime: data.dateTime,
        description: data.description,
        healthcareProfessionalName: data.healthcareProfessionalName,
        location: data.location,
        participantCount: 0,
        image: res.data.data.display_url,
        AdminName: user.email,
      };

      const campRes = await axiosSecure.patch(`/camp/${_id}`, campDetails);
      if (campRes.data.modifiedCount>0) {
        toast.success('Camp Updated Successfully');
        navigate('dashboard/manageCamp')
      }
    }
    console.log('image url', res.data);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10  rounded-lg shadow-lg mt-10">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Update Camp</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    
        <div>
          <label className="block text-sm font-medium text-gray-700">Camp Name</label>
          <input
            type="text"
            {...register("campName", { required: "Camp name is required" })}
            placeholder="Enter Camp Name"
            defaultValue={campName}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.campName && (
            <span className="text-sm text-red-500">{errors.campName.message}</span>
          )}
        </div>

   
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

 
        <div>
          <label className="block text-sm font-medium text-gray-700">Camp Fees (in $)</label>
          <input
            type="number"
            {...register("campFees", {
              required: "Camp fees are required",
              min: { value: 0, message: "Fees must be greater than or equal to 0" },
            })}
            placeholder="Enter Camp Fees"
            defaultValue={campFees}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.campFees && (
            <span className="text-sm text-red-500">{errors.campFees.message}</span>
          )}
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", { required: "Date and time are required" })}
            defaultValue={dateTime}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.dateTime && (
            <span className="text-sm text-red-500">{errors.dateTime.message}</span>
          )}
        </div>

    
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            defaultValue={location}
            {...register("location", { required: "Location is required" })}
            placeholder="Enter Location"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.location && (
            <span className="text-sm text-red-500">{errors.location.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Healthcare Professional Name
          </label>
          <input
          defaultValue={healthcareProfessionalName}
            type="text"
            {...register("healthcareProfessionalName", {
              required: "Healthcare professional name is required",
            })}
            placeholder="Enter Name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          />
          {errors.healthcareProfessionalName && (
            <span className="text-sm text-red-500">
              {errors.healthcareProfessionalName.message}
            </span>
          )}
        </div>

     
        <div>
          <label className="block text-sm font-medium text-gray-700">Participant Count</label>
          
          <input
            type="number"
           defaultValue={participantCount}
            disabled
            className="w-full mt-1 p-3 bg-gray-100 border border-gray-300 rounded-lg"
          />
        </div>

   
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter Camp Description"
            rows="4"
            defaultValue={description}
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">{errors.description.message}</span>
          )}
        </div>

    
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#B354A6] text-white font-semibold rounded-lg  focus:ring-2 focus:ring-blue-300"
        >
          Update Camp
        </button>
      </form>
    </div>
  );
};

export default UpdateCamp;
