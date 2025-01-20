import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useRegCamp from '@/Hooks/useRegCamp';
import React from 'react';
import toast from 'react-hot-toast';

const ManageRegisteredCamps = () => {
  const axiosSecure=useAxiosSecure()
  const [regCamp,refetch] = useRegCamp();
  const handleCancel=async(camp)=>{
    const res = await axiosSecure.delete(`/applicant/${camp._id}`)
      if(res.data.deletedCount>0){
        toast.success("Camp Application Rejected")
      }
      refetch()
      
  }

  const handleConfirm = (id) => {
    axiosSecure.patch(`/applicant/${id}`, { paymentConfirmed: true })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
         toast.success('Confirmation Status Updated')
          refetch(); 
        }
      })
     
  };
  



  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Manage  Registered Camps: {regCamp.length}
        </h2>

        {regCamp.length === 0 ? (
          <p className="text-gray-600">You have not registered for any camps yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-800">
                  Camp Name
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-800">
                  Camp Fees
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-800">
                  Participant Name
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-800">
                  Payment Status
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-gray-800">
                  Confirmation Status
                </th>
                <th className="border border-gray-200 px-4 py-2 text-center text-gray-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {regCamp.map((camp) => (
                <tr key={camp.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{camp.campName}</td>
                  <td className="border border-gray-200 px-4 py-2">${camp.campFees}</td>
                  <td className="border border-gray-200 px-4 py-2">{camp.applicantName}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    {camp.paymentStatus ? (
                      <span className="text-green-600 font-semibold">Paid</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Unpaid</span>
                    )}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {camp.paymentStatus && camp.paymentConfirmed ? (
                      <h2 className='text-green-600 font-semibold'>Confirmed</h2>
                    ) : camp.paymentStatus && !camp.paymentConfirmed ? (
                      <button  onClick={() => handleConfirm(camp._id)} className="px-1 bg-[#B354A6] font-medium text-white py-2 rounded-md">Click To Confirm</button>
                    ) : (
                      <p className='text-red-600 font-semibold '>Pending</p>
                    )}
                  </td>

                  <td className="border border-gray-200 px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleCancel(camp)}
                      className={`px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 ${camp.paymentStatus && camp.paymentConfirmed
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                        }`}
                      disabled={camp.paymentStatus && camp.paymentConfirmed}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
