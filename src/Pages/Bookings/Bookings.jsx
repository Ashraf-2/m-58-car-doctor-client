import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import swal from "sweetalert";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data);
            })
    }, [])
    const handleDelete = id => {
        const proceed = confirm("Ary you sure to delete this service?");
        if(proceed)
        {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0)
                {
                    swal("Deleted","","success");
                    const remaing = bookings.filter(booking => booking._id !== id)
                    setBookings(remaing)
                }
            })
        }
    }
    return (
        <div>
            <h2>Bookings: :{bookings.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Service Name</th>
                                <th>Customer Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
                            }
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>


        </div>
    );
};

export default Bookings;