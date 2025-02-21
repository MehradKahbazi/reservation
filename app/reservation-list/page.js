const ReservationList = () => {
  return (
    <div className="content">
    
    <div className="container">
      <div className="search-container w-100 shadow mb-3">
      <div className="search-wrapper">
        <div className="search-header">
          <div className="search-input-group">
            <input type="text" className="search-input form-control" placeholder="Search products, categories, brands..." />
            <i className="fas fa-search search-icon"></i>
          </div>

          <div className="quick-filters">
            <span className="quick-filter">Price: Low to High</span>
            <span className="quick-filter">Best Rated</span>
            <span className="quick-filter">New Arrivals</span>
          </div>
        </div>

        <div className="category-filters">
          <div className="filter-chip active">
            <i className="fas fa-globe"></i> All
          </div>
          <div className="filter-chip">
            <i className="fas fa-laptop"></i> Electronics
          </div>
          <div className="filter-chip">
            <i className="fas fa-tshirt"></i> Fashion
          </div>
          <div className="filter-chip">
            <i className="fas fa-home"></i> Home & Living
          </div>
          <div className="filter-chip">
            <i className="fas fa-dumbbell"></i> Sports
          </div>
          <div className="filter-chip">
            <i className="fas fa-book"></i> Books
          </div>
          <div className="filter-chip">
            <i className="fas fa-gamepad"></i> Gaming
          </div>

          <div className="suggestions">
            <div className="suggestion-item">
              Wireless Headphones <span className="suggestion-category">in Electronics</span>
            </div>
            <div className="suggestion-item">
              Running Shoes <span className="suggestion-category">in Sports</span>
            </div>
            <div className="suggestion-item">
              Smart Watch <span className="suggestion-category">in Electronics</span>
            </div>
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
