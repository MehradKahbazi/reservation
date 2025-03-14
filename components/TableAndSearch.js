"use client";

import { getUserLogs } from "@/actions/form-actions";
import { useState } from "react";
import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import Swal from "sweetalert2";

const TableAndSearch = ({ data }) => {
  const [pageData, setPageData] = useState(data);
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const handleFilter = (formData) => {
    const arrDate = formData.get("arrival");
    const depDate = formData.get("departure");
    const filteredData = data.filter(
      (item) => item.date >= arrDate && item.date <= depDate
    );
    setPageData(filteredData);
  };


  const showDetails = async (id) => {
    console.log(data);
    const logs = await getUserLogs(id);
    const [passenger] = data.filter(item => item.passenger_id === id)
    console.log(passenger);
    let tableBody = ``;
    logs.map(item =>{
      tableBody+= `
      <tr>
        <td>${item.username}</td>
        <td>${item.meal}</td>
        <td>${item.useddinner || item.usedlunch}/ ${passenger.count}</td>
        <td>${item.date}</td>
        <td>${item.time}</td>
      </tr>
      `
    })
    Swal.fire({
      title: "History",
      html: `
          <table className="table custom-table" style="width: 100%">
            <thead>
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Meal</th>
                <th scope="col">Count</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
                  ${tableBody}
            </tbody>
          </table>
          `,
      icon: "info",
      showCancelButton: true,
      showCloseButton: true,
      showConfirmButton: false,
      cancelButtonText: 'dismiss'
    });
  };

  return (
    <div className="container">
      <div className=" w-100  mb-4 ">
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
      </div>
      <div className="table-responsive">
        <button className="btn btn-success mb-2" onClick={onDownload}>
          Save Excel
        </button>
        <table className="table custom-table" ref={tableRef}>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Count</th>
              <th scope="col">Reservation Code</th>
              <th scope="col">Arrival Date</th>
              <th scope="col">Departure Date</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Used Lunch</th>
              <th scope="col">Used Dinner</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, index) => {
              return (
                <tr
                  key={item.passenger_id}
                  onClick={() => {
                    showDetails(item.passenger_id);
                  }}
                >
                  <td>{index + 1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.count}</td>
                  <td>{item.reservationcode}</td>
                  <td>{item.arrivaldate}</td>
                  <td>{item.departuredate}</td>
                  <td>{item.hotelname}</td>
                  <td>
                    {item.usedlunch} from {+item.count * +item.alloweddays}
                  </td>
                  <td>
                    {item.useddinner} from {+item.count * +item.alloweddays}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAndSearch;
