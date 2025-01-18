import useAdmin from '@/Hooks/useAdmin';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-gray-900 text-gray-100 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Dashboard</h2>
          <ul className="space-y-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/organizerProfile"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Your Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addCamp"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Add Camp
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageCamp"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Manage Camp
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageRegisteredCamps"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Manage Registered Camps
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/analytics"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Analytics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/participantProfile"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Participant Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/registeredCamps"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Registered Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                      }`
                    }
                  >
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            <hr className="my-4 border-gray-700" />
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
