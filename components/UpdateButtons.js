"use client";

import { updateMeal } from "@/actions/form-actions";
import Swal from "sweetalert2";
import { getToday } from "@/lib/getToday";
import { showToast } from "@/lib/toaster";
import { useRouter } from "next/navigation";

const UpdateButtons = ({ item }) => {
  let today = getToday();
  

  const update = async (id, uMeal) => {
    let res;
    const { value } = await Swal.fire({
      title: "Enter Coupon Count",
      input: "text",
      inputValidator: async (value) => {
        const regex = /^[0-9]*$/;

        if (+value > +item.count) {
          return "Bigger Than allowed size";
        }
        if (!regex.test(value)) {
          return 'Only Numbers Permitted'
        }
      },
    });
    if (value) {
      await Swal.fire({
        title: "Are you sure you want to proceed?",
        html: `
            <table className="table custom-table" style="width: 100%">
              <thead>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Meal</th>
                  <th scope="col">Code</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                  <td>${item.fullname}</td>
                  <td>${uMeal}</td>
                  <td>
                    ${item.reservationcode}
                  </td>
                  <td>${value}</td>
                </tr>
              </tbody>
            </table>
            `,
        icon: "info",
        confirmButtonText: "Save",
        showCancelButton: true,
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          res = await updateMeal(id, uMeal, value);
        },
      });
    }
    showToast({status: res, message: res})
  };
  return (
    <form>
      <button
        className="btn btn-warning me-2"
        disabled={item.lastLunch === today ? true : false}
        formAction={update.bind(null, item.passenger_id, "lunch")}
      >
        {item.lastLunch === today && <span>Used</span>}
        {item.lastLunch !== today && <span>Lunch</span>}
      </button>
      <button
        className="btn btn-primary"
        disabled={item.lastdinner === today ? true : false}
        formAction={update.bind(null, item.passenger_id, "dinner")}
      >
        {item.lastdinner === today && <span>Used</span>}
        {item.lastdinner !== today && <span>Dinner</span>}
      </button>
    </form>
  );
};

export default UpdateButtons;
