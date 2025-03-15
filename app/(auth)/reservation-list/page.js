import { getAllPassengers } from "@/actions/form-actions";
import ReservationTable from "@/components/ReservationTable";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

const ReservationList = async() => {

  const result = await verifyAuth();
  if(!result.session){
    redirect('/login')
  }
  const data = await getAllPassengers();
  return (
    <div className="content">
    
    <ReservationTable data={data} buttons={true} />

  </div>
  );
};

export default ReservationList;
