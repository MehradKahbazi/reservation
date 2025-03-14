import TableAndSearch from "@/components/TableAndSearch";
import { verifyAuth } from "@/lib/auth";
import { getPassengers } from "@/lib/passengers"; 
import { redirect } from "next/navigation";

const Reports = async() => {
  const data = getPassengers();
  const result = await verifyAuth();
  if(!result.session){
    redirect('/login')
  }
  return (
    <div className="content">
      <TableAndSearch data={data}/>
    </div>
  );
};

export default Reports;
