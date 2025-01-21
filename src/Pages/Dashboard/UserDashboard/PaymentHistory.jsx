import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-2 lg:p-8">
      <h3 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Payment History</h3>
      <p className="text-base text-center lg:text-lg mb-4">
        <strong>Total Payments:</strong> {payment.length}
      </p>

      {payment.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-1 lg:px-6 py-1 lg:py-3 text-left text-xs font-medium text-gray-700">
                  Transaction ID
                </th>
                <th className="px-1 lg:px-6 py-1 lg:py-3 text-left text-xs font-medium text-gray-700">
                  Price ($)
                </th>
                <th className="px-1 lg:px-6 py-1 lg:py-3 text-left text-xs font-medium text-gray-700">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item, index) => (
                <tr
                  key={item.transactionId}
               
                >
                  <td className="px-1 lg:px-6 py-1 lg:py-3 text-[10px] lg:text-base text-gray-800">
                    {item.transactionId}
                  </td>
                  <td className="px-1 lg:px-6 py-1 lg:py-3 text-[10px] lg:text-base text-gray-800">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-1 lg:px-6 py-1 lg:py-3 text-[10px] lg:text-base text-gray-800">
                    {new Date(item.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No payments found.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
