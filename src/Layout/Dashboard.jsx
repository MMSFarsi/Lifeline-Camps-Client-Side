import useAdmin from "@/Hooks/useAdmin";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row">

      <div className="lg:hidden bg-gray-900 text-gray-100 shadow-lg">
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <button
            className="text-white p-2 rounded-md hover:bg-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="bg-gray-800 text-gray-100">
            <ul className="space-y-2 p-4">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/organizerProfile"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-md ${
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                        }`
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/registeredCamps"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-md ${
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                          isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                      isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden lg:block w-56 min-h-screen bg-gray-800 text-gray-100 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mt-5 mb-6 text-center">Dashboard</h2>
          <ul className="space-y-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/organizerProfile"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                      }`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/registeredCamps"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md ${
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
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
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

   
      <div className="flex-1 bg-[#FCF8F8]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
