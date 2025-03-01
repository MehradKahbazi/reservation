"use server";

import { storePassenger } from "@/lib/initdb";
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