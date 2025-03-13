"use client";

import { createHotel, removeHotel } from "@/actions/form-actions";
import { useActionState } from "react";
import Swal from "sweetalert2";

const AddHotelForm = ({ hotels }) => {
  const [formState, formAction] = useActionState(createHotel, {});
  if (formState?.errors) {
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
  } else if (formState === "success") {
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
      title: "Hotel Added Successfully",
    });
  }

  const handleRemove = async(item) =>{
    const res = await removeHotel(item.hotel_id)
    if(res=== 'success'){
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
        title: "Hotel Removed Successfully",
      });
    } else{
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
        title: "Not Alowed",
      });
    }
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
        <div className="col-sm-12 submit-button d-flex align-items-end justify-content-between">
          <ul
            class="list-group list-group-flush text-start"
            style={{ width: "50%" }}
          >
            {hotels.map((item) => (
              <li className="list-group-item d-flex align-items-end justify-content-between" key={item.hotel_id}>
                {item.hotelname}{" "}
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  onClick={handleRemove.bind(null, item)}
                ></button>
              </li>
            ))}
          </ul>
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
};

export default AddHotelForm;
