"use server";

import { getLogs, storePassenger, updatePassenger } from "@/lib/passengers"; 

import { revalidatePath } from "next/cache";

export async function createRecord(formData) {
    const passengerName = formData.get("name");
    const code = formData.get("reservationcode");
    const count = formData.get("count");
    const arrDate = formData.get("arrival");
    const hotel = formData.get("hotel");
    const depDate = formData.get("departure");
    const agency = formData.get("agency");
    const res = storePassenger({
      passengerName,
      count,
      arrDate,
      depDate,
      code,
      hotel: +hotel,
      agency,
    });
    revalidatePath("/reservation-list");
    if(res.message === 'success'){
      return {message: 'success', id: res.id, passengerId: res.passengerId}
    } else {
      return{ message: 'exists', data: res.passenger}
    }

    // redirect('/reservation-list')
  }

  export const updateMeal = async(id, meal, value) => {
    const res = updatePassenger(id, meal, value);
    
    return res;
  };

  export const getUserLogs = async(id) =>{
    return getLogs(id);
  }