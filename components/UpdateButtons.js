"use client";

import { updateMeal } from "@/actions/form-actions";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";

const UpdateButtons = ({ item }) => {
  let today = new Date();
  const time = today.toLocaleTimeString("it-IT");
  today =
    today.getFullYear() +
    "-" +
    today.toLocaleDateString(undefined, { month: "2-digit" }) +
    "-" +
    today.toLocaleDateString(undefined, { day: "2-digit" });
  const [meal, setMeal] = useState('')
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const update = async (id, uMeal) => {
    const res = await updateMeal(id, uMeal);
    if (res === "success") {
      setMeal(uMeal)
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
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: res
      });
      setMeal('');

    }
  };
console.log(today, item.lastLunch);
  return (
    <form>
      <button
        className="btn btn-warning me-2"
        disabled={item.lastLunch === today ? true : false}
        formAction={update.bind(null, item.passenger_id, "lunch")}
      >
        Lunch
      </button>
      <button
        className="btn btn-primary"
        disabled={item.lastdinner === today ? true : false}
        formAction={update.bind(null, item.passenger_id, "dinner")}
      >
        Dinner
      </button>
      <ToastContainer />
      <table className={`table custom-table position-absolute ${meal ? 'd-block' : 'd-none'}`} style={{top: '-100000px'}} ref={contentRef}>
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
