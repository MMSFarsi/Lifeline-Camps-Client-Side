
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useRegCamp from '@/Hooks/useRegCamp';

const RegisteredCamps = () => {
  const axiosSecure=useAxiosSecure()
  const [regCamp,refetch] = useRegCamp();
  const handleCancel=async(camp)=>{
    const res = await axiosSecure.delete(`/applicant/${camp._id}`)
      console.log(res.data);
      refetch()
      
  }

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Registered Camps: {regCamp.length}
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
                      <button
                        onClick={() => handlePayment(camp)}
                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Pay
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {camp.paymentConfirmed ? 'Confirmed' : 'Pending'}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleFeedback(camp)}
                      className={`px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
                        camp.paymentConfirmed ? '' : 'hidden'
                      }`}
                    >
                      Feedback
                    </button>
                    <button
                      onClick={() => handleCancel(camp)}
                      className={`px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 ${
                        camp.paymentStatus ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={camp.paymentStatus}
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

export default RegisteredCamps;
