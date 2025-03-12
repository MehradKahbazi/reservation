"use client";

import { createRecord } from "@/actions/form-actions";
import { useRef, useState } from "react";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const ReservationForm = ({ data }) => {
  const contentRef = useRef(null);
  const [entry, setEntry] = useState(null);

    const reactToPrintFn = useReactToPrint({ contentRef });

  const handleSubmit = async (formData) => {
    let res;
    const clientName = formData.get("name");
    const reservationCode =formData.get("reservationcode");
    const count = formData.get("count");
    const arrival = formData.get("arrival");
    const departure = formData.get("departure");
    const hotel = formData.get("hotel");
    const agency = formData.get("agency");
    
    const tableBody = `
              <tr>
                  <td>${clientName}</td>
                  <td>${reservationCode}</td>
                  <td>${count}</td>
                  <td>${arrival}</td>
                  <td>${departure}</td>
                  <td>${hotel}</td>
                  <td>${agency}</td>
              </tr>`;
    await Swal.fire({
      title: "Are you sure you want to proceed?",
      html: `
            <table className="table custom-table" style="width: 100%">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Count</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Departure</th>
                  <th scope="col">Hotel</th>
                  <th scope="col">Agency</th>
                </tr>
              </thead>
              <tbody>
                ${tableBody}
              </tbody>
            </table>
            `,
      icon: "info",
      confirmButtonText: "Save",
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "Dismiss",
      width: "50vw",
      preConfirm: async () => {
        res = await createRecord(formData, false);
        console.log(res);
        setEntry({
          clientName,
          reservationCode,
          count,
          arrival,
          departure,
          hotel,
          agency,
          id: res.id,
          passengerId: res.passengerId
        })
      },
    });
    if (res.message === "success") {
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
      await Toast.fire({
        icon: "success",
        title: "Saved successfully",
      });
      reactToPrintFn();

    } else if(res.message === 'exists'){
      setEntry(null)
      const tableBody = `
              <tr>
                  <td>${res.data.fullname}</td>
                  <td>${res.data.reservationcode}</td>
                  <td>${res.data.count}</td>
                  <td>${res.data.arrivaldate}</td>
                  <td>${res.data.departuredate}</td>
                  <td>${res.data.hotel}</td>
                  <td>${res.data.agency}</td>
              </tr>`;
      await Swal.fire({
        title: "Are you sure you want to proceed?",
        html: `
              <table className="table custom-table" style="width: 100%">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Count</th>
                    <th scope="col">Arrival</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Hotel</th>
                    <th scope="col">Agency</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableBody}
                </tbody>
              </table>
              `,
        icon: "warning",
        confirmButtonText: "Save",
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonText: "Dismiss",
        width: "50vw",
        preConfirm: async () => {
          res = await createRecord(formData, true);
          console.log(res);
          setEntry({
            clientName,
            reservationCode,
            count,
            arrival,
            departure,
            hotel,
            agency,
            id: res.id,
            passengerId: res.passengerId
          })
        },
      });
    }
    
    else {
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
        title: "Something went wrong",
      });
    }
    setEntry(null);
  };

  return (
    <form id="survey-form" className="p-3" action={handleSubmit}>
      {entry && <table
        className={`table custom-table position-absolute start-0`}
        style={{zIndex: '-1000'}}
        ref={contentRef}
      >
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Reservation Code</th>
            <th scope="col">Count</th>
            <th scope="col">Arrival</th>
            <th scope="col">Departure</th>
            <th scope="col">Hotel</th>
            <th scope="col">Agency</th>
            <th scope="col">Resturant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{entry.clientName}</td>
            <td>{entry.reservationCode}</td>
            <td>{entry.count}</td>
            <td>{entry.arrival}</td>
            <td>{entry.departure}</td>
            <td>{entry.hotel}</td>
            <td>{entry.agency}</td>
            <td> 51 Oak st.</td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'middle'}} colSpan={4}>Passenger Id: {entry.passengerId}</td>
            <td colSpan={4}><Barcode value={entry.id.slice(0,16)} /></td>
          </tr>
        </tbody>
      </table>}
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
          <label id="email-label" className="control-label" htmlFor="count">
            Passengers Count:
          </label>
        </div>

        <div className="input-group col-sm-9">
          <div className="input-group-prepend"></div>
          <input type="text" className="form-control" id="count" name="count" />
        </div>
      </div>

      <div className="form-group row mb-3">
        <div className="col-sm-3">
          <label id="number-label" className="control-label" htmlFor="arrival">
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
      <div className="form-group row mb-3">
        <div className="col-sm-3">
          <label id="email-label" className="control-label" htmlFor="agency">
            Agency:
          </label>
        </div>

        <div className="input-group col-sm-9">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            className="form-control"
            id="agency"
            name="agency"
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
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default ReservationForm;
