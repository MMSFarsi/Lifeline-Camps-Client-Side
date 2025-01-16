import useAdmin from '@/Hooks/useAdmin'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
   const [isAdmin]=useAdmin()
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-slate-100">
                <ul className="p-12">
                {
                    isAdmin?<>
                    <li><NavLink to='/dashboard/organizerProfile'>Your Profile</NavLink></li>
                    <li><NavLink to='/dashboard/addCamp'>Add Camp</NavLink></li>
                    <li><NavLink to='/dashboard/manageCamp'>Manage Camp</NavLink></li>
                    <li><NavLink to='/dashboard/manageRegisteredCamps'>Manage Registered Camps  </NavLink></li>
                    </>:
                    <>
                    <li><NavLink to='/dashboard/analytics'>Analytics</NavLink></li>
                    <li><NavLink to='/dashboard/participantProfile'>Participant Profile</NavLink></li>
                    <li><NavLink to='/dashboard/registeredCamps'>Registered Camps</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'>Payment History  </NavLink></li>
                    </>
                }

                    <hr />

                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard