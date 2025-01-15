import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"


const useRegCamp = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useAuth()
    const {data:regCamp=[]}=useQuery({
        queryKey:['regCamp',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/applicant?email=${user.email}`);
            return res.data
        }
    })

    return[regCamp]
 
}

export default useRegCamp