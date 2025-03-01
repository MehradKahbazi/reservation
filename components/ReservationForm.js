"use client";

import { createRecord } from "@/actions/form-actions";
import { ToastContainer, toast } from "react-toastify";


const ReservationForm = ({data}) => {

    const handleSubmit = async (formData) =>{
        const res = await createRecord(formData);
        toast.success(res, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme:'dark'           
            });
    }


    return ( 
        <form id="survey-form" className="p-3" action={handleSubmit}>
            <div className="row form-group mb-3">
              <div className="col-sm-3">
                <label id="name-label" className="control-label" htmlFor="name">
                  Full Name:
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
            <div className="row form-group mb-3">
              <div className="col-sm-3">
                <label
                  id="name-label"
                  className="control-label"
                  htmlFor="reservationcode"
                >
                  Reservation Code:
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>
                <input
                  id="reservationcode"
                  type="text"
                  className="form-control"
                  placeholder="Please Enter Full Name"
                  name="reservationcode"
                  required
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-3">
                <label
                  id="email-label"
                  className="control-label"
                  htmlFor="count"
                >
                  Passengers Count:
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>
                <input
                  type="text"
                  className="form-control"
                  id="count"
                  name="count"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-3">
                <label
                  id="number-label"
                  className="control-label"
                  htmlFor="arrival"
                >
                  Arrival Date
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>
                <input
                  type="date"
                  className="form-control"
                  id="arrival"
                  name="arrival"
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col-sm-3">
                <label
                  id="number-label"
                  className="control-label"
                  htmlFor="departure"
                >
                  Deparure Date
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>
                <input
                  type="date"
                  className="form-control"
                  id="departure"
                  name="departure"
                  required
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <div className="col-sm-3">
                <label className="control-label" htmlFor="visit-purpose">
                  Hotel:
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>

                <select className="form-select" name="hotel" id="hotel">
                  {data.map((item) => (
                    <option
                      defaultValue={item.hotel_id == 1 ? true : false}
                      value={item.hotel_id}
                      key={item.hotel_id}
                    >
                      {" "}
                      {item.hotelname}
                    </option>
                  ))}
                </select>
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
                  Save
                </button>
              </div>
            </div>
            <ToastContainer />
          </form>
     );
}
 
export default ReservationForm;