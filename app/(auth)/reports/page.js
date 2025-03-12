import TableAndSearch from "@/components/TableAndSearch";
import { getLogs, getPassengers } from "@/lib/passengers"; 

const Reports = () => {
  const data = getPassengers();
  return (
    <div className="content">
      <TableAndSearch data={data}/>
    </div>
  );
};

export default Reports;
