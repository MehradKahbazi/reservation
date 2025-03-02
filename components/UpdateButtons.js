"use client";

import { updateMeal } from "@/actions/form-actions";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";

const UpdateButtons = ({ item }) => {
  const [meal, setMeal] = useState('')
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const update = async (id, uMeal) => {
    const res = await updateMeal(id, uMeal);
    setMeal(uMeal)
    if (res === "success") {
      Swal.fire({
        title: "Success!",
        html: `
        <table className="table custom-table" ref={${contentRef}}>
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Meal</th>
              <th scope="col">Reservation Code</th>
              <th scope="col">Count</th>
              <th scope="col">Resturant</th>
            </tr>
          </thead>
          <tbody>
                <tr>
              <td>${item.fullname}</td>
              <td>${uMeal}</td>
              <td>
                ${item.reservationcode}
              </td>
              <td>${item.count}</td>
             <td> 51 Oak st.</td>
            </tr>
          </tbody>
        </table>
        `,
        icon: "info",
        confirmButtonText: "Print",
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          await reactToPrintFn();
          setMeal('');
        },
      });
    } else {
      toast.error(res, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <form>
      <button
        className="btn btn-warning me-2"
        disabled={item.getlunch === "true" ? true : false}
        formAction={update.bind(null, item.passenger_id, "lunch")}
      >
        Lunch
      </button>
      <button
        className="btn btn-primary"
        disabled={item.getdinner === "true" ? true : false}
        formAction={update.bind(null, item.passenger_id, "dinner")}
      >
        Dinner
      </button>
      <ToastContainer />
      <table className={`table custom-table position-absolute ${meal ? 'd-block' : 'd-none'}`} style={{top: '-100px'}} ref={contentRef}>
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Meal</th>
              <th scope="col">Reservation Code</th>
              <th scope="col">Count</th>
              <th scope="col">Resturant</th>
            </tr>
          </thead>
          <tbody>
                <tr>
              <td>{item.fullname}</td>
              <td>{meal}</td>
              <td>
                {item.reservationcode}
              </td>
              <td>{item.count}</td>
             <td> 51 Oak st.</td>
            </tr>
          </tbody>
        </table>
    </form>
  );
};

export default UpdateButtons;
