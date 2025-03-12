'use client';

import { createHotel } from "@/actions/form-actions";
import { useActionState } from "react";
import Swal from "sweetalert2";

const AddHotelForm = () => {
    const [formState, formAction] = useActionState(createHotel, {});
    if(formState?.errors){
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
          icon: "error",
          title: formState.errors.password,
        });
      }else if(formState === "success"){
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
          title: 'Hotel Added Successfully',
        });
      }
    return ( 
        <form id="survey-form" className="p-3" action={formAction}>
            <div className="row form-group mb-3">
              <div className="col-sm-3">
                <label id="name-label" className="control-label" htmlFor="name">
                  Hotel Name:
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Please Enter Full Name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12 submit-button">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-theme"
                  aria-pressed="true"
                >
                  Save New Hotel
                </button>
              </div>
            </div>
          </form>
     );
}
 
export default AddHotelForm;