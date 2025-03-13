"use server";

import { getLogs, storePassenger, updatePassenger } from "@/lib/passengers";
import { deleteHotel, storeHotels, storeTimes } from "@/lib/hotels";

import { revalidatePath } from "next/cache";

export async function createRecord(formData, attempt) {
  const passengerName = formData.get("name");
  const code = formData.get("reservationcode");
  const count = formData.get("count");
  const arrDate = formData.get("arrival");
  const hotel = formData.get("hotel");
  const depDate = formData.get("departure");
  const agency = formData.get("agency");
  const res = storePassenger(
    {
      passengerName,
      count,
      arrDate,
      depDate,
      code,
      hotel: +hotel,
      agency,
    },
    attempt
  );
  revalidatePath("/reservation-list");
  if (res.message === "success") {
    return {
      message: "success",
      id: res.id,
      passengerId: res.passengerId,
      data: res,
    };
  } else {
    return { message: "exists", data: res.passenger };
  }

  // redirect('/reservation-list')
}

export const updateMeal = async (id, meal, value) => {
  const res = updatePassenger(id, meal, value);

  return res;
};

export const getUserLogs = async (id) => {
  return getLogs(id);
};

export const createHotel = async (prevState, formData) => {
  const hotelname = formData.get("name");

  storeHotels(hotelname);
  return "success";
};

export const updateTime = async (prevState, formData) => {
  const lunchStart = formData.get("lunchstart");
  const lunchEnd = formData.get("lunchend");
  const dinnerStart = formData.get("dinnerstart");
  const dinnerEnd = formData.get("dinnerend");
  storeTimes({ lunchStart, lunchEnd, dinnerStart, dinnerEnd });
  return "success";
};

export const removeHotel = async (hotelId) => {
  const res = deleteHotel(hotelId);
  if (res === "success") {
    revalidatePath("/", "layout");
    return "success";
  }
  return 'not allowed'
};
