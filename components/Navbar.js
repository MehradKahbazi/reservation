import { logout } from "@/actions/auth-actions";
import NaveLinks from "./NavLinks";

const Navbar = async () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 position-fixed w-100 z-2 top-0">
      <div className="container-fluid bg-header p-2">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <NaveLinks />
        <form className="d-flex" action={logout}>
            <button className="btn btn-outline-danger" type="submit">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
