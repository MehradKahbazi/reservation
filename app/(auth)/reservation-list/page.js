import ReservationTable from "@/components/ReservationTable";
import { getPassengers } from "@/lib/initdb";

const ReservationList = () => {

  const data = getPassengers();
  return (
    <div className="content">
    
    <ReservationTable data={data} />

  </div>
  );
};

export default ReservationList;
