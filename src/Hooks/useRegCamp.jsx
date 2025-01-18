import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"
import useAdmin from "./useAdmin"


const useRegCamp = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const [isAdmin]=useAdmin()
    const {data:regCamp=[],refetch}=useQuery({
        queryKey:['regCamp',user?.email],
        queryFn:async()=>{
             const url = isAdmin ? '/applicantAdmin' : `/applicant?email=${user.email}`;
      const res = await axiosSecure.get(url);
      return res.data;
        }
    })

    return[regCamp,refetch]
 
}

export default useRegCamp