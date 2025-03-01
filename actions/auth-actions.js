"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/initdb";
import { redirect } from "next/navigation";

export const signup = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }
  const hashedPassword = hashUserPassword(password);
  createUser(email, hashedPassword, role);
  return 'success'
};

export const signin = async (prevState, formData) => {
  console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);
  console.log("existing", existingUser);
  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate user. Please check your credentials",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      password: {
        email: "Could not authenticate user. Please check your credentials",
      },
    };
  }

  createAuthSession(existingUser.id);
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
