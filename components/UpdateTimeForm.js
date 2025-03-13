'use client';
import { updateTime } from "@/actions/form-actions";
import { useActionState } from "react";
import Swal from "sweetalert2";

const UpdateTimeForm = ({times}) => {
    const [formState, formAction] = useActionState(updateTime, {});
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
          title: 'Times Updated Successfully',
        });
      }
    return ( <form id="survey-form" className="p-3" action={formAction}>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="lunchstart">
          Lunch Start Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="lunchstart"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="lunchstart"
          required
          defaultValue={times.lunchstart}
        />
      </div>
    </div>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="lunchend">
          Lunch End Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="lunchend"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="lunchend"
          required
          defaultValue={times.lunchend}
        />
      </div>
    </div>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="dinnerstart">
          Dinner Start Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="dinnerstart"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="dinnerstart"
          required
          defaultValue={times.dinnerstart}
        />
      </div>
    </div>
    <div className="row form-group mb-3">
      <div className="col-sm-3">
        <label id="name-label" className="control-label" htmlFor="dinnerend">
          Dinner End Time:
        </label>
      </div>

      <div className="input-group col-sm-9">
        <div className="input-group-prepend"></div>
        <input
          id="dinnerend"
          type="time"
          className="form-control"
          placeholder="Please Enter Full Name"
          name="dinnerend"
          required
          defaultValue={times.dinnerend}
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
          Update Time Table
        </button>
      </div>
    </div>
  </form> );
}
 
export default UpdateTimeForm;