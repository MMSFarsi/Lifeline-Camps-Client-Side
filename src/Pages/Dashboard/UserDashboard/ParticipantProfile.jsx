import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";

const ParticipantProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile(name, photoURL)
      .then(() => {
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  py-10">
       <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Participant Profile
        </h2>
      <div className=" lg:p-10   max-w-lg w-full">
       
        <div className="flex items-center flex-col space-x-6 mb-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <div>
            <p className="text-xl font-medium text-gray-800">{user?.displayName}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Update Profile
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Update Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Photo URL</label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update Information
                </button>
              </div>
            </form>
            <div className="mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full px-6 py-2 text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantProfile;
