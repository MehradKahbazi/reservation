import AddHotelForm from "@/components/AddHotelForm";
import UpdateTimeForm from "@/components/UpdateTimeForm";
import { verifyAuth } from "@/lib/auth";
import { getHotels, getTimes } from "@/lib/hotels";
import Image from "next/image";

import { redirect } from "next/navigation";

const AddHotel = async () => {
  const result = await verifyAuth();
  if(!result.session){
    redirect('/login')
  }
  const [times] = getTimes();
 
  const hotels = getHotels();
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
            <Image
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    src="/resturant1.jpg"
                    alt="Welcome back you've been missed!"
                    width={600}
                    height={600}
                  />
          </div>
        </div>

        <div
          id="form-content"
          className="col-md-8 shadow card border-light-subtle"
        >
          <AddHotelForm hotels={hotels} />
          <hr />
          <UpdateTimeForm times={times}/>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
