import useAxiosSecure from "@/Hooks/useAxiosSecure";
import useCamp from "@/Hooks/useCamp";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageCamp = () => {
  const [camps, refetch] = useCamp();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = async (camp) => {
    try {
      const res = await axiosSecure.delete(`/camp/${camp._id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Camp Deleted");
        refetch();
      }
    } catch (error) {
      toast.error("Failed to delete camp. Please try again.");
    }
  };

  const toastDelete = (camp) => {
    toast(
      (t) => (
        <div className="flex gap-3 items-start">
          <div className="text-[14px]">Want to delete this camp?</div>
          <div>
            <button
              className="bg-red-400 text-white px-2 py-1 rounded-md mr-1"
              onClick={() => {
                handleDeleteItem(camp);
                toast.dismiss(t.id); 
              }}
            >
              Yes
            </button>
            <button
              className="bg-green-400 text-white px-2 py-1 rounded-md"
              onClick={() => toast.dismiss(t.id)} 
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { id: `delete-toast-${camp._id}` } 
    );
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto rounded-lg p-6">
        <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">
          Manage Camps
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">#</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Camp Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Location</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Healthcare Professional</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Update</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Delete</th>
              </tr>
            </thead>
            <tbody>
              {camps.map((camp, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-800">{i + 1}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{camp.campName}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {new Date(camp.dateTime).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">{camp.location}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{camp.healthcareProfessionalName}</td>
                  <td className="px-4 py-2">
                    <Link to={`/dashboard/updateCamp/${camp._id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => toastDelete(camp)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCamp;
