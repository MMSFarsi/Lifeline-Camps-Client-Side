import React, { useState } from 'react';
import useCamp from '@/Hooks/useCamp';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const CampDetails = () => {
    const { id } = useParams();
    const [camps,refetch] = useCamp();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const { register, handleSubmit, reset } = useForm();

    const camp = camps.find((camp) => camp._id === id);

    if (!camp) {
        return <div>Camp not found</div>;
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const onSubmit = (data) => {
        const participantData = {
            ...data,
            campId: camp._id,
            campName: camp.campName,
            campFees: camp.campFees,
            location: camp.location,
            healthcareProfessionalName: camp.healthcareProfessionalName,
            applicantName: user.displayName,
            applicantEmail: user.email,
            paymentStatus:false,
            paymentConfirmed:false
            
        };
        axiosPublic.post('/applicant',participantData)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success('Camp Registration Successfully Submit.Go to Dashboard & Payment Now.')
            }
            refetch()
        })
        
        reset();
        setIsModalOpen(false);
       
    };

    return (
        <div className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">{camp.campName}</h2>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={camp.image} alt={camp.campName} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{camp.location}</p>
                        <p className="text-sm text-gray-500 mb-2">{new Date(camp.dateTime).toLocaleString()}</p>
                        <p className="text-lg text-gray-800 font-bold mb-2">${camp.campFees}</p>
                        <p className="text-sm text-gray-500 mb-2">
                            Healthcare Professional: {camp.healthcareProfessionalName}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">Participants: {camp.participantCount}</p>
                        <p className="text-sm text-gray-600 mb-4">{camp.description}</p>

                        <button
                            onClick={toggleModal}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50  bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Register for Camp</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="flex gap-3 justify-between">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Camp Name</label>
                                    <input
                                        type="text"
                                        value={camp.campName}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Camp Fees</label>
                                    <input
                                        type="text"
                                        value={`$${camp.campFees}`}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 justify-between">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Location</label>
                                    <input
                                        type="text"
                                        value={camp.location}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Healthcare Professional</label>
                                    <input
                                        type="text"
                                        value={camp.healthcareProfessionalName}
                                        readOnly
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 justify-between">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Your Name</label>
                                    <input
                                        type="text"
                                        defaultValue={user.displayName}
                                        readOnly
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Your Email</label>
                                    <input
                                        type="email"
                                       defaultValue={user.email}
                                       readOnly
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 justify-between">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Age</label>
                                    <input
                                        type="number"
                                        {...register('age', { required: true, min: 1 })}
                                        placeholder="Your Age"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                                    <input
                                        type="text"
                                        {...register('phone', { required: true })}
                                        placeholder="Your Phone Number"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-3 grid-cols-2">
                                <div className=''>
                                    <label className="block text-sm font-medium text-gray-600">Gender</label>
                                    <select
                                        {...register('gender', { required: true })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">Emergency Contact</label>
                                    <input
                                        type="text"
                                        {...register('emergencyContact', { required: true })}
                                        placeholder="Emergency Contact"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampDetails;
