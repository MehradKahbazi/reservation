import UpdateButtons from "./UpdateButtons";

const TableRow = ({item, index, buttons}) => {
    return ( <tr >
        <td>{index + 1}</td>
        <td>{item.fullname}</td>
        <td>{item.count}</td>
        <td>{item.reservationcode}</td>
        <td>{item.arrivaldate}</td>
        <td>{item.departuredate}</td>
        <td>{item.hotelname}</td>
        <td>{item.couponid}</td>
        <td>
          {buttons && <UpdateButtons item={item} />}
        </td>
      </tr> );
}
 
export default TableRow;