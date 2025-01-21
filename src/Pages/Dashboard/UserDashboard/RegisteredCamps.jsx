import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useRegCamp from '@/Hooks/useRegCamp';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const RegisteredCamps = () => {
  const axiosSecure = useAxiosSecure();
  const [regCamp, refetch] = useRegCamp();

  const handleCancel = async (camp) => {
    const res = await axiosSecure.delete(`/applicant/${camp._id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      toast.success('Registration Withdraw Successfull')
    }
    refetch();
  };

  return (
    <div className="py-5 lg:py-10">
      <div className="lg:px-8">
        <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">
          Registered Camps: {regCamp.length}
        </h2>

        {regCamp.length === 0 ? (
          <p className="text-gray-600">You have not registered for any camps yet.</p>
        ) : (
          <div className="overflow-x-auto"> 
            <table className="w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
              <thead className="text-xs">
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
              <tbody className="text-xs">
                {regCamp.map((camp) => (
                  <tr key={camp._id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">{camp.campName}</td>
                    <td className="border border-gray-200 px-4 py-2">${camp.campFees}</td>
                    <td className="border border-gray-200 px-4 py-2">{camp.applicantName}</td>
                    <td className="border border-gray-200 px-4 py-2">
                      {camp.paymentStatus ? (
                        <span className="text-green-600 font-semibold">Paid</span>
                      ) : (
                        <Link
                          to={`/dashboard/payment/${camp._id}`}
                          className="px-4 py-2 text-sm bg-[#B354A6] text-white rounded-md"
                        >
                          Pay
                        </Link>
                      )}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {camp.paymentConfirmed ? 'Confirmed' : 'Pending'}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center space-x-2">
                      {camp.reviewStatus ? (
                        <button disabled className="px-2 py-2 text-sm bg-green-600 text-white rounded-md">
                          Reviewed
                        </button>
                      ) : (
                        <Link
                          to={`/dashboard/addreview/${camp._id}`}
                          className={`px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 ${camp.paymentConfirmed ? '' : 'hidden'
                            }`}
                        >
                          Feedback
                        </Link>
                      )}
                      <button
                        onClick={() => handleCancel(camp)}
                        className={`px-4 mt-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 ${camp.paymentStatus ? 'opacity-50 cursor-not-allowed' : ''
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
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisteredCamps;
