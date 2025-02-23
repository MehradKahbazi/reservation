import { getHotels, getPassengers, storeHotels, storePassenger } from "@/lib/initdb";
import { redirect } from "next/dist/server/api-utils";

const CreateReservation = () =>{

    const data = getHotels()
    
    const res = getPassengers();
    console.log(res);

     async function createRecord (formData){
        "use server";
        const passengerName = formData.get('name');
        const code = formData.get('reservationcode');
        const count = formData.get('count');
        const arrDate = formData.get('arrival');
        const hotel = formData.get('hotel');
        const depDate = formData.get('departure');
        storePassenger({
            passengerName,
            count,
            arrDate,
            depDate,
            code,
            hotel: +hotel
        })

        // redirect('/reservation-list')
    }


    return(
        <div className="container"> 
        
       
       <div className="row ">   
           <div id="form-tagline" className="col-md-4 shadow">
               <div className="form-tagline">
                   <i className="fa fa-envelope fa-5x"></i>
                   <h2>How Are We Doing?</h2>
                   <p id="description" className="lead">We really value your opinion</p>
              <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="./login.jpg" alt="Welcome back you've been missed!"/>

               </div>
           </div>
          
               <div id="form-content" className="col-md-8 shadow card border-light-subtle">
             
             <form id="survey-form" className="p-3" action={createRecord}> 
                                 
                 <div className="row form-group mb-3">
                    <div className="col-sm-3">
                     <label id="name-label" className="control-label" htmlFor="name">Full Name:</label>
                    </div>
                   
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>                   
                      <input id="name" type="text" className="form-control" placeholder="Please Enter Full Name" name="name" required />
                    </div>
                 </div>
                 <div className="row form-group mb-3">
                    <div className="col-sm-3">
                     <label id="name-label" className="control-label" htmlFor="reservationcode">Reservation Code:</label>
                    </div>
                   
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>                   
                      <input id="reservationcode" type="text" className="form-control" placeholder="Please Enter Full Name" name="reservationcode" required />
                    </div>
                 </div>
                  
                 <div className="form-group row mb-3">
                    <div className="col-sm-3">
                      <label id="email-label" className="control-label" htmlFor="count">Passengers Count:</label>
                    </div>
                  
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      <input type="text" className="form-control" id="count" name="count" />
                    </div>
                 </div>
                  
                 <div className="form-group row mb-3">
                    <div className="col-sm-3">
                      <label id="number-label" className="control-label" htmlFor="arrival">Arrival Date</label>
                    </div>
                  
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      <input type="date" className="form-control" id="arrival"  name="arrival"  required/>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-sm-3">
                      <label id="number-label" className="control-label" htmlFor="departure">Deparure Date</label>
                    </div>
                  
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      <input type="date" className="form-control" id="departure"  name="departure"  required/>
                    </div>
                  </div>
                  
                 <div className="form-group row mb-3">    
                    <div className="col-sm-3">
                      <label className="control-label"htmlFor="visit-purpose">Hotel:</label>
                    </div>
                    
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      
                      <select className="form-select" name="hotel" id="hotel">
                        {data.map(item => <option defaultValue={item.hotel_id == 1 ? true : false} value={item.hotel_id} key={item.hotel_id}> {item.hotelname}</option>)}
                      </select>
                      
                    </div>     
                 </div>
                  
              
            
               <hr />  
                  
               
                  
               <div className="form-group row mb-3"> 
                  <div className="col-sm-3">
                    <label className="control-label" htmlFor="comment">Comments:</label>
                  </div>
                   
                  <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                   <textarea className="form-control" rows="5" id="comment"></textarea>
                  </div>  
               </div>
                 
               <div className="form-group row">
                 <div className="col-sm-12 submit-button">
                   <button type="submit" id="submit" className="btn btn-theme" aria-pressed="true">Submit Form</button>
                 </div>
               </div>
                                
             </form> 
 
             </div> 
                
       </div>
     </div>
    )
}

export default CreateReservation;