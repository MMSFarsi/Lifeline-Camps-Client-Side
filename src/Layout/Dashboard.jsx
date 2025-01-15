import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
        <div className="w-64 min-h-full bg-slate-100">
    <ul className="menu">
        <li><NavLink to='/dashboard/organizerProfile'>Your Profile</NavLink></li>
        <li><NavLink to='/dashboard/addCamp'>Add Camp</NavLink></li>
        <li><NavLink to='/dashboard/manageCamp'>Manage Camp</NavLink></li>
        <li><NavLink to='/dashboard/manageRegisteredCamps'>Manage Registered Camps  </NavLink></li>
    </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard