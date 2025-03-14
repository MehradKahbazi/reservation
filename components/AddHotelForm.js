"use client";

import { createHotel, removeHotel } from "@/actions/form-actions";
import { showToast } from "@/lib/toaster";


const AddHotelForm = ({ hotels }) => {

  const handleAdd = async (formData) =>{
    const res = await createHotel(formData)
    
      showToast(res)
  }
  const handleRemove = async(item) =>{
    const res = await removeHotel(item.hotel_id)
    showToast(res);
  }

  return (
    <form id="survey-form" className="p-3" action={handleAdd}>
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
            className="list-group list-group-flush text-start"
            style={{ width: "50%" }}
          >
            {hotels.map((item) => (
              <li className="list-group-item d-flex align-items-end justify-content-between" key={item.hotel_id}>
                {item.hotelname}{" "}
                <button
                  type="button"
                  className="btn-close"
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
