"use server";

import { storePassenger, updatePassenger } from "@/lib/passengers"; 

import { revalidatePath } from "next/cache";

export async function createRecord(formData) {
    const passengerName = formData.get("name");
    const code = formData.get("reservationcode");
    const count = formData.get("count");
    const arrDate = formData.get("arrival");
    const hotel = formData.get("hotel");
    const depDate = formData.get("departure");
    storePassenger({
      passengerName,
      count,
      arrDate,
      depDate,
      code,
      hotel: +hotel,
    });
    revalidatePath("/reservation-list");
    return 'success'

    // redirect('/reservation-list')
  }

  export const updateMeal = async(id, meal) => {
    console.log('test');
    const res = await updatePassenger(id, meal);
    return res;
  };