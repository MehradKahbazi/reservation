"use client";

import { resetPass } from "@/actions/auth-actions";
import { showToast } from "@/lib/toaster";
import Swal from "sweetalert2";

const ChangeBtn = ({ item }) => {
  const handleUpdate = async (user) => {
    const { value } = await Swal.fire({
      title: "Enter New Password",
      input: "text",
      inputValidator: async (value) => {
        if (value.length < 8) {
          return "Must be longer than 8 characters";
        }
      },
    });
    if (value) {
      await Swal.fire({
        title: `Are you sure you want to Reset Password for ${user.username}?`,
        icon: "info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonText: "Dismiss",
        preConfirm: async () => {
          const res = await resetPass(user, value);
          showToast(res);
        },
      });
    }
  };
  return (
    <form className="d-inline" action={handleUpdate.bind(null, item)}>
      <button
        className="btn btn-info"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangeBtn;
