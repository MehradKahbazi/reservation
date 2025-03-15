"use server";

import { getLogs, getPassengers, removePassenger, storePassenger, updatePassenger } from "@/lib/passengers";
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

}

export const updateMeal = async (id, meal, value) => {
  const res = updatePassenger(id, meal, value);
  revalidatePath('/', 'layout')
  return res;
};

export const getUserLogs = async (id) => {
  return getLogs(id);
};

export const createHotel = async (formData) => {
  const hotelname = formData.get("name");
  const res = storeHotels(hotelname);
  revalidatePath('/', 'layout')
  return res;
};

export const updateTime = async (formData) => {
  const lunchStart = formData.get("lunchstart");
  const lunchEnd = formData.get("lunchend");
  const dinnerStart = formData.get("dinnerstart");
  const dinnerEnd = formData.get("dinnerend");
  revalidatePath('/', 'layout');
  const res = storeTimes({ lunchStart, lunchEnd, dinnerStart, dinnerEnd });
  return res;
};

export const getAllPassengers = async() =>{
  const res = getPassengers()
  return res;
}

export const removeHotel = async (hotelId) => {
  const res = deleteHotel(hotelId);
  
    revalidatePath("/", "layout");
    return res;
  
};



