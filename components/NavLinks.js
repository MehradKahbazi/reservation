'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NaveLinks = () => {
    const role = useSearchParams().get('role');
    return ( 
        
          role === 'admin' && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href='/reservation-list?role=admin'>
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/create-reservation?role=admin">
                Make a Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/settings?role=admin">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/register?role=admin">
                Create a New Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/reports?role=admin">
                Report
              </Link>
            </li>
          </ul>
          
     );
}
 
export default NaveLinks;