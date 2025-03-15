import ChangeBtn from "@/components/ChangeBtn";
import { verifyAuth } from "@/lib/auth";
import { getUsers } from "@/lib/users";
import { redirect } from "next/navigation";

const ResetPassword = async() => {
    const users = getUsers();
    const result = await verifyAuth();
  if(!result.session){
    redirect('/login')
  }
    return ( 
        <div className="container">
      
      <div className="table-responsive mt-5">
        <table className="table custom-table mt-5">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.role}</td>
                    <td className="text-center"><ChangeBtn item={item} /></td>
                    
                  </tr>
                )              
            )}
          </tbody>
        </table>
      </div>
    </div>
     );
}
 
export default ResetPassword;