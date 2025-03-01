import { verifyAuth } from "@/lib/auth";
import {
  getHotels,
  getPassengers,
  storeHotels,
  storePassenger,
} from "@/lib/initdb";
import { redirect } from "next/navigation";

const AddHotel = async () => {
  async function createRecord(formData) {
    "use server";
    const hotelname = formData.get("name");

    storeHotels(hotelname);

    // redirect('/reservation-list')
  }

  return (
    <div className="container">
      <div className="row ">
        <div id="form-tagline" className="col-md-4 shadow">
          <div className="form-tagline">
            <i className="fa fa-envelope fa-5x"></i>
            <h2>How Are We Doing?</h2>
            <p id="description" className="lead">
              We really value your opinion
            </p>
            <img
              className="img-fluid rounded-start w-100 h-100 object-fit-cover"
              loading="lazy"
              src="./login.jpg"
              alt="Welcome back you've been missed!"
            />
          </div>
        </div>

        <div
          id="form-content"
          className="col-md-8 shadow card border-light-subtle"
        >
          <form id="survey-form" className="p-3" action={createRecord}>
            <div className="row form-group mb-3">
              <div className="col-sm-3">
                <label id="name-label" className="control-label" htmlFor="name">
                  Hotel Name:
                </label>
              </div>

              <div className="input-group col-sm-9">
                <div className="input-group-prepend"></div>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Please Enter Full Name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12 submit-button">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-theme"
                  aria-pressed="true"
                >
                  Submit Form
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
