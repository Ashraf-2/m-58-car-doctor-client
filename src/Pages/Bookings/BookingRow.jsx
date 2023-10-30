import swal from "sweetalert";

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    console.log(booking);
    const { _id, img, title, customerName, date, email, price, service, service_id, status } = booking;



    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-24 h-24">
                            <img src={img} alt={customerName} />
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">{service}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td className="font-bold">
                <span className="text-lg">{customerName}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <th>{date}
                {/* <button className="btn btn-ghost btn-xs">details</button> */}
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">X</button>
            </th>
            <th>
                {
                    status === 'confirm'?
                    <button className="font-bold">Confirmed</button>
                    :
                    <button onClick={() => handleConfirm(_id)} className="btn btn-ghost normal-case">Please Confirm</button>
                    
                }
            </th>
        </tr>


    );
};

export default BookingRow;