const Filter = ({handleFilter}) => {
    return ( <div className=" w-100  mb-4 ">
    <div className="search-wrapper rounded-pill">
      <form className="search-header" action={handleFilter}>
        <div className="search-input-group rounded-pill row justify-content-around">
          <div className="form-group col-lg-4 mb-3">
            <div className="col-sm-3">
              <label
                id="number-label"
                className="control-label"
                htmlFor="arrival"
              >
                Arrival Date
              </label>
            </div>

            <div className="input-group col-sm-9">
              <div className="input-group-prepend"></div>
              <input
                type="date"
                className="form-control"
                id="arrival"
                name="arrival"
                required
              />
            </div>
          </div>
          <div className="form-groupx col-lg-4 mb-3">
            <div>
              <label
                id="number-label"
                className="control-label"
                htmlFor="departure"
              >
                Deparure Date
              </label>
            </div>

            <div className="input-group col-sm-9">
              <div className="input-group-prepend"></div>
              <input
                type="date"
                className="form-control"
                id="departure"
                name="departure"
                required
              />
            </div>
          </div>
          <div className="form-group col-lg-2 mb-3">
            <div className="col-sm-3">
              <label
                id="number-label"
                className="control-label"
                htmlFor="arrival"
              ></label>
            </div>

            <div className="input-group col-sm-9">
              <button className="btn btn-light">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div> );
}
 
export default Filter;