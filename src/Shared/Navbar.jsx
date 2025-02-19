import React, { useState, useContext } from "react";
import { Menu, Dropdown, Button, Drawer } from "antd";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "@/provider/AuthProvider";
import { MenuOutlined } from "@ant-design/icons";
import useAdmin from "@/Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin()
  const [isDrawerOpen, setDrawerOpen] = useState(false);


  const handleLogout = () => {
    logOut()
      // .then(() => console.log("User logged out"))
      // .catch((error) => console.error(error.message));
  };

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <span>{user?.displayName || "User Name"}</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        {
          user && isAdmin && <NavLink to='/dashboard/organizerProfile'>DashBoard</NavLink>
        }
        {
          user && !isAdmin && <NavLink to='/dashboard/participantProfile'>DashBoard</NavLink>
        }
      </Menu.Item>
      <Menu.Item danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">

              <span className="text-xl lg:text-2xl font-bold text-gray-800">Lifeline Camps</span>
            </Link>
          </div>

     
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#B354A6] font-semibold' : 'text-gray-600 hover:text-[#B354A6]'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/available-camps"
              className={({ isActive }) =>
                isActive ? 'text-[#B354A6] font-semibold' : 'text-gray-600 hover:text-[#B354A6]'
              }
            >
              Available Camps
            </NavLink>
            {
          user && isAdmin && <NavLink  className={({ isActive }) =>
            isActive ? 'text-[#B354A6] font-semibold' : 'text-gray-600 hover:text-[#B354A6]'
          } to='/dashboard/organizerProfile'>DashBoard</NavLink>
        }
        {
          user && !isAdmin &&  <NavLink  className={({ isActive }) =>
            isActive ? 'text-[#B354A6] font-semibold' : 'text-gray-600 hover:text-[#B354A6]'
          } to='/dashboard/participantProfile'>DashBoard</NavLink>
        }
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? 'text-[#B354A6] font-semibold' : 'text-gray-600 hover:text-[#B354A6]'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive ? 'text-[#B354A6] font-semibold' : 'text-gray-600 hover:text-[#B354A6]'
              }
            >
              Contact Us
            </NavLink>

          </div>

         
          {
            !user ? <Link to="/login">
              <Button className="px-2 lg:px-7  font-semibold py-2 lg:py-5 rounded-xl bg-[#B354A6] text-white">Join Us</Button>
            </Link> : <>
              <div className="flex items-center space-x-4">
                {user ? (
                  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/150"}
                      alt="User Profile"
                    referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border cursor-pointer"
                    />
                  </Dropdown>
                ) : (
                  <Button
                    type="primary"
                    className="md:hidden"
                    onClick={() => setDrawerOpen(true)}
                  >
                    <MenuOutlined />
                  </Button>
                )}
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  className="md:hidden"
                  onClick={() => setDrawerOpen(true)}
                />
              </div>
            </>
          }


        </div>
      </div>

 
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-green-500"
            onClick={() => setDrawerOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/available-camps"
            className="text-gray-600 hover:text-green-500"
            onClick={() => setDrawerOpen(false)}
          >
            Available Camps
          </Link>
          <Link
            to="/aboutUs"
            className="text-gray-600 hover:text-green-500"
            onClick={() => setDrawerOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contactUs"
            className="text-gray-600 hover:text-green-500"
            onClick={() => setDrawerOpen(false)}
          >
            Contact Us
          </Link>
          {!user ? (
            <Link
              to="/login"
              onClick={() => setDrawerOpen(false)}
            >
              <Button type="primary">Join Us</Button>
            </Link>
          ) : (
            <div>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button className="w-full">Profile Options</Button>
              </Dropdown>
            </div>
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
