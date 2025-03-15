'use client';
const Search = ({handleSearch, input}) => {
    return ( <div className=" w-100  mb-4 ">
    <div className="search-wrapper rounded-pill">
      <div className="search-header ">
        <div className="search-input-group rounded-pill">
          <input
            type="text"
            className="search-input form-control rounded-pill"
            placeholder="Search Passenger Name"
            value={input}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Search;