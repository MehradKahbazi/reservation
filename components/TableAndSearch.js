"use client";

import { useState } from "react";
import React, { useRef } from "react";
import { DownloadTableExcel, useDownloadExcel } from "react-export-table-to-excel";

const TableAndSearch = ({ data }) => {
  const [pageData, setPageData] = useState(data);

  const handleFilter = (formData) => {
    const arrDate = formData.get("arrival");
    const depDate = formData.get("departure");
    const filteredData = data.filter(
      (item) => item.date >= arrDate && item.date <= depDate
    );
    setPageData(filteredData);
  };

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
})

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
        <button className="btn btn-success mb-2" onClick={onDownload}>Save Excel</button>
        <table className="table custom-table" ref={tableRef}>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Total allowed</th>
              <th scope="col">Total Used</th>
              <th scope="col">On</th>
            </tr>
          </thead>
          <tbody>
            {pageData &&
              pageData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.total.split(".", 1)}</td>
                    <td>{item.totalMeals}</td>
                    <td>{item.date}</td>
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
