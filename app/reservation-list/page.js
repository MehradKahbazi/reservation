import { getPassengers } from "@/lib/initdb";

const ReservationList = () => {

  const data = getPassengers();
  console.log(data);
  return (
    <div className="content">
    
    <div className="container">
      <div className=" w-100  mb-4 ">
      <div className="search-wrapper rounded-pill">
        <div className="search-header ">
          <div className="search-input-group rounded-pill">
            <input type="text" className="search-input form-control rounded-pill" placeholder="Search products, categories, brands..." />
            <i className="fas fa-search search-icon"></i>
          </div>

          
        </div>

        
      </div>
    </div>
      <div className="table-responsive">

        <table className="table custom-table">
          <thead>
            <tr>
              
              <th scope="col">id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Count</th>
              <th scope="col">Reservation Code</th>
              <th scope="col">Arrival Date</th>
              <th scope="col">Departure Date</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Tokens</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index)=>{
              return(
                <tr key={item.passenger_id}>
              
              <td>
                {index+1}
              </td>
              <td>{item.fullname}</td>
              <td>{item.count}</td>
              <td>
                {item.reservationcode}
              </td>
              <td>{item.arrivaldate}</td>
             <td>{item.departuredate}</td>
             <td>{item.hotelname}</td>
             <td>
              <button className="btn btn-warning me-2">Lunch</button>
              <button className="btn btn-primary">Dinner</button>
             </td>
            </tr>
              )
            })}
            
            
            
          </tbody>
        </table>
      </div>


    </div>

  </div>
  );
};

export default ReservationList;
