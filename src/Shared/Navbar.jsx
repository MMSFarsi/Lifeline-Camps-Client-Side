import React, { useState, useContext } from "react";
import { Menu, Dropdown, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { AuthContext } from "@/provider/AuthProvider";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((error) => console.error(error.message));
  };

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <span>{user?.displayName || "User Name"}</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/dashboard/organizerProfile">Dashboard</Link>
      </Menu.Item>
      <Menu.Item danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-800">Lifeline Camps</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-green-500">
              Home
            </Link>
            <Link
              to="/available-camps"
              className="text-gray-600 hover:text-green-500"
            >
              Available Camps
            </Link>
          </div>

          {/* Profile Dropdown or Mobile Menu Toggle */}
        {
          !user?   <Link to="/login">
          <Button type="primary">Join Us</Button>
        </Link>:<>
        <div className="flex items-center space-x-4">
            {user ? (
              <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User Profile"
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

      {/* Mobile Drawer */}
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
          {!user ? (
            <Link
              to="/join"
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
