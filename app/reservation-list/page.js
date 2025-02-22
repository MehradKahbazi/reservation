const ReservationList = () => {
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
              <th scope="col">
                <label className="control control--checkbox">
                  <input type="checkbox" className="js-check-all"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <th scope="col">Order</th>
              <th scope="col">Sales</th>
              <th scope="col">Description</th>
              <th scope="col">Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>
                1392
              </td>
              <td>Sales Pitch - 2019</td>
              <td>
                Far far away, behind the word mountains
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+63 983 0962 971</td>
             
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>4616</td>
              <td>Social Media Planner</td>
              <td>
                Far far away, behind the word mountains
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+02 020 3994 929</td>
              
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>9841</td>
              <td>Website Agreement</td>
              <td>
                Far far away, behind the word mountains
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+01 352 1125 0192</td>
              
            </tr>

            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>
                1392
              </td>
              <td>Sales Pitch - 2019</td>
              <td>
                Far far away, behind the word mountains
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+63 983 0962 971</td>
              
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>4616</td>
              <td>Social Media Planner</td>
              <td>
                Far far away, behind the word mountains
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+02 020 3994 929</td>
            
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>9841</td>
              <td>Website Agreement</td>
              <td>
                Far far away, behind the word mountains
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+01 352 1125 0192</td>
             
            </tr>
            
            
          </tbody>
        </table>
      </div>


    </div>

  </div>
  );
};

export default ReservationList;
