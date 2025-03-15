const TableHead = ({buttons}) => {
    return ( 
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
     );
}
 
export default TableHead;