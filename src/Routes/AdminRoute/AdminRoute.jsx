import useAdmin from "@/Hooks/useAdmin";
import useAuth from "@/Hooks/useAuth";
import { Navigate } from "react-router-dom";



const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin()
   
    if(loading || isAdminLoading){
        return  <img src="https://i.ibb.co.com/Gvvsc4p/66.gif" alt="" />
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to="/" ></Navigate>
}

export default AdminRoute