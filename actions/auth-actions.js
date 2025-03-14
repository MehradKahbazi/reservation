"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail, resetPassword } from "@/lib/users"; 
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signup = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");


  if (password.trim().length < 8) {
    return { status: "error", message: "Password must be at least 8 characters long." }
  }

  const hashedPassword = hashUserPassword(password);
  const res = createUser(email, hashedPassword, role);
  revalidatePath('/', 'layout');
  return res;
};

export const signin = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);
  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!existingUser ||!isValidPassword) {
    return { status: "error", message: "Failed. Please check your credentials" }
    
  }


  await createAuthSession(existingUser.id);
  if (existingUser.role === "admin") {
    redirect("/reservation-list?role=admin");
  } else if (existingUser.role === "operator") {
    redirect("/create-reservation");
  } else if (existingUser.role === "cashier") {
    redirect("/reservation-list");
  }
};

export const logout = async () => {
  await destroySession();
  redirect("/login");
};


export const resetPass = async(user, newPassword) =>{
  const hashedPassword = hashUserPassword(newPassword);
  const res = resetPassword(user, hashedPassword)
  return res;
}