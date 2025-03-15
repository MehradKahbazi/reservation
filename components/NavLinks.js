
import { verifyAuth } from "@/lib/auth";
import Link from "next/link";

const NaveLinks = async() => {
  const result = await verifyAuth();
  return (
    result.user.role === "admin" && (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link"
            aria-current="page"
            href="/reservation-list"
          >
            Reservations
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/create-reservation">
            Make a Reservation
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/settings">
            Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/register">
            Create a New Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/reports">
            Report
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/change-password">
            Change Password
          </Link>
        </li>
      </ul>
    )
  );
};

export default NaveLinks;
