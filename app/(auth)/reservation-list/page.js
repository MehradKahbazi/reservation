import ReservationTable from "@/components/ReservationTable";
import { verifyAuth } from "@/lib/auth";
import { getPassengers } from "@/lib/passengers"; 
import { redirect } from "next/navigation";

const ReservationList = async() => {

  const result = await verifyAuth();
  if(!result.session){
    redirect('/login')
  }
  const data = getPassengers();
  return (
    <div className="content">
    
    <ReservationTable data={data} buttons={true} />

  </div>
  );
};

export default ReservationList;
