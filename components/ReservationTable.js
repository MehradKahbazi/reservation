"use client";
import UpdateButtons from "@/components/UpdateButtons";
import { getToday } from "@/lib/getToday";
import { useState } from "react";

const ReservationTable = ({ data, buttons }) => {
  const [pageData, setPageData] = useState(data);
  const [input, setInput] = useState("");
console.log(data);
  const handleSearch = (searchPhrase) => {
    setInput(searchPhrase);
    if (searchPhrase === "") {
      setPageData(data);
    } else {
      const temp = data.filter((item) => item.fullname.includes(searchPhrase) || item.couponid.includes(searchPhrase));
      setPageData(temp);
    }
  };

  let today = getToday();
  return (
    <div className="container">
      <div className=" w-100  mb-4 ">
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
              <th scope="col">Coupon</th>
              {buttons && <th scope="col">Tokens</th>}
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, index) => {
              if (item.departuredate > today) {
                return (
                  <tr key={item.passenger_id}>
                    <td>{index + 1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.count}</td>
                    <td>{item.reservationcode}</td>
                    <td>{item.arrivaldate}</td>
                    <td>{item.departuredate}</td>
                    <td>{item.hotelname}</td>
                    <td>{item.couponid}</td>
                    <td>
                      {buttons && <UpdateButtons item={item} />}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationTable;
