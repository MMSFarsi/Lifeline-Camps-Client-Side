
import useAxiosSecure from "@/Hooks/useAxiosSecure"
import useCamp from "@/Hooks/useCamp"

const ManageCamp = () => {
  const [camps,refetch]=useCamp()
  const axiosSecure=useAxiosSecure()

  const handleDeleteItem=async(camp)=>{
    const res = await axiosSecure.delete(`/camp/${camp._id}`)
      console.log(res.data);
      refetch(); 
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Camp Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Health Care Professional</th>
              <th>Action (Update)</th>
              <th>Action (Delete)</th>
            </tr>
          </thead>
          <tbody>
           
          {
            camps.map((camp,i)=>  <tr key={i}>
              <th>{i+1}</th>
              <td>{camp.campName}</td>
              <td>{camp.dateTime}</td>
              <td>{camp.location}</td>
              <td>{camp.healthcareProfessionalName}</td>
              <td><button >Update</button></td>
              <td><button onClick={() => handleDeleteItem(camp)}>Delete</button></td>
            </tr>)
          }
           
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCamp