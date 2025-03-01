'use client';

import { updateMeal } from "@/actions/form-actions";
import { ToastContainer, toast } from "react-toastify";

const UpdateButtons = ({ item }) => {
  const update = async(id, meal) =>{
    const res = await updateMeal(id, meal)
    if(res === 'success'){
      toast.success(res,
        {
          position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              theme:'dark' 
        }
      )
    } else{
      toast.error(res,
        {
          position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              theme:'dark' 
        }
      )
    }
  }

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
