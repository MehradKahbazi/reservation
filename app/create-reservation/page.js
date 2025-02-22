import { getHotels, storeHotels } from "@/lib/initdb";

const CreateReservation = () =>{

    const data = getHotels('new hotel')
    console.log(data);
    return(
        <div className="container"> 
        {/* <div className="row"> 
          
          <div id="form-header" className="col-12">
            <h1 id="title">Hotel Survey Form</h1>
          </div>
        </div>  */}
       
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
             
             <form id="survey-form" className="p-3"> 
                                 
                 <div className="row form-group mb-3">
                    <div className="col-sm-3">
                     <label id="name-label" className="control-label" htmlFor="name">*Name:</label>
                    </div>
                   
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>                   
                      <input id="name" type="text" className="form-control" placeholder="Please Enter Your Name" name="name" required />
                    </div>
                 </div>
                  
                 <div className="form-group row mb-3">
                    <div className="col-sm-3">
                      <label id="email-label" className="control-label" htmlFor="email">*Email:</label>
                    </div>
                  
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email" pattern="^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$" required/>
                    </div>
                 </div>
                  
                 <div className="form-group row mb-3">
                    <div className="col-sm-3">
                      <label id="number-label" className="control-label" htmlFor="email">*Room Number:</label>
                    </div>
                  
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      <input type="number" className="form-control" id="number" placeholder="Enter Your Room Number" name="number" min="1" max="125" required/>
                    </div>
                  </div>
                  
                 <div className="form-group row mb-3">    
                    <div className="col-sm-3">
                      <label className="control-label"htmlFor="visit-purpose">Type of Trip:</label>
                    </div>
                    
                    <div className="input-group col-sm-9">
                      <div className="input-group-prepend">
                      </div>
                      
                      <select className="form-control" id="dropdown">
                        <option>Business</option>
                        <option>Couple</option>
                        <option>Family</option>
                        <option>Friends</option>
                        <option>Solo</option>
                        <option>Event</option>
                        <option>Other</option>
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