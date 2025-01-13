import useAuth from "@/Hooks/UseAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user}=useAuth()
    return (
      <div className="navbar bg-base-100">

        <div className="flex-1">
          <Link to='/' className=" text-xl">Lifelines Camp </Link>
        </div>
       
  
     
        <div className="flex-none space-x-4">
          <Link to='/' className="btn btn-ghost normal-case">
      Home
          </Link>
          <Link to='available-camp' className="btn btn-ghost normal-case">
            Available Camp
          </Link>
          <Link to='join-us' className="btn btn-ghost normal-case">
          Join US
          </Link>
        </div>
  
    
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  