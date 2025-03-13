'use client';

import { resertPass } from "@/actions/auth-actions";
import Swal from "sweetalert2";

const ResetBtn = ({item}) => {
    const handleUpdate = async(user) =>{
      const {value} = await Swal.fire({
        title: "Enter New Password",
        input: "text",
        inputValidator: async (value) => {
          if (value.length < 8) {
            return "Must be longer than 8 characters";
          }
        },
      });
        if(value){
          await Swal.fire({
            title: `Are you sure you want to Reset Password for ${user.username}?`,
            icon: "info",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            showCloseButton: true,
            cancelButtonText: "Dismiss",
            preConfirm: async () => {
                const res = await resertPass(user, value);
                if(res === 'success'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        },
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Password Changed Successfully",
                      });
                }
            },
          });
        }
    }
    return ( 
        <form>
            <button className="btn btn-info" formAction={handleUpdate.bind(null, item)}>Reset Password</button>
        </form>
     );
}
 
export default ResetBtn;