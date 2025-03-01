import TableAndSearch from "@/components/TableAndSearch";
import { getLogs, getPassengers } from "@/lib/initdb";

const Reports = () => {
  const data = getLogs();
  console.log(data);
    const sortedData = [];
    data.map(item => {
        let found =0;
        sortedData.map(newItem =>{
            
            if(newItem.userid == item.userid && newItem.date === item.date){
                console.log('test', newItem.totalMeals);
                newItem.totalMeals =newItem.totalMeals || 0;
                newItem.totalMeals+= +item.useddinner || +item.usedlunch
                console.log(item.totalMeals);
                found+=1
            } 
        })
        if(found == 0){
            item.totalMeals = 0;
            sortedData.push({...item, totalMeals: item.totalMeals+= +item.useddinner || +item.usedlunch})
            console.log('first', item.totalMeals);
        }
    })
    console.log(sortedData);
  return (
    <div className="content">
      <TableAndSearch data={sortedData}/>
    </div>
  );
};

export default Reports;
