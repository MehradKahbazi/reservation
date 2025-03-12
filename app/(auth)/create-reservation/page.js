import ReservationForm from "@/components/ReservationForm";
import { verifyAuth } from "@/lib/auth";
import { getHotels } from "@/lib/hotels"; 
import { redirect } from "next/navigation";


const CreateReservation = async () => {
  const result = await verifyAuth();
  if(!result.session){
    redirect('/login')
  }
  const data = getHotels();
  return (
    <div className="container">
      <div className="row ">
        <div id="form-tagline" className="col-md-4 shadow">
          <div className="form-tagline">
            <i className="fa fa-envelope fa-5x"></i>
            <h2>How Are We Doing?</h2>
            
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
          <ReservationForm data={data} />
        </div>
      </div>
    </div>
  );
};

export default CreateReservation;
