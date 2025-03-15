"use client";
import UpdateButtons from "@/components/UpdateButtons";
import { getToday } from "@/lib/getToday";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Search from "./Search";
import TableHead from "./TableHead";

const ReservationTable = ({ data, buttons }) => {
  const [pageData, setPageData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() =>{
    setPageData(data);
  },[data])

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
      <Search handleSearch={handleSearch} input={input} />
      <div className="table-responsive">
        <table className="table custom-table">
          <TableHead buttons={buttons} />
          <tbody>
            {pageData.map((item, index) => {
              if (item.departuredate > today) {
                return (
                  <TableRow key={item.passenger_id} item={item} index={index} buttons={buttons}/>
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
