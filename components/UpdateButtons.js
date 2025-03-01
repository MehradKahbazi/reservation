"use client";

import { updateMeal } from "@/actions/form-actions";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const UpdateButtons = ({ item }) => {
  // const contentRef = useRef(null);
  // const reactToPrintFn = useReactToPrint({ contentRef });
  const update = async (id, meal) => {
    const res = await updateMeal(id, meal);
    if (res === "success") {
      Swal.fire({
        title: "Success!",
        html: `
        <table className="table custom-table" id="printTable">
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
              <td>${meal}</td>
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
    </form>
  );
};

export default UpdateButtons;
