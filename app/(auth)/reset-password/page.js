import ResetBtn from "@/components/ResetBtn";
import { getUsers } from "@/lib/users";

const ResetPassword = () => {
    const users = getUsers();
    console.log(users);
    return ( 
        <div className="container">
      
      <div className="table-responsive mt-5">
        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.role}</td>
                    <td><ResetBtn item={item} /></td>
                    
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