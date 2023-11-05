import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import swal from "sweetalert";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         setBookings(data);
        //     })

        axios.get(url, {withCredentials: true})              //withcredentials will send the cookies.
        .then(res => {
            setBookings(res.data);
        })
    }, [url])
    const handleDelete = id => {
        const proceed = confirm("Ary you sure to delete this service?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        swal("Deleted", "", "success");
                        const remaing = bookings.filter(booking => booking._id !== id)
                        setBookings(remaing)
                    }
                })
        }
    }
    const handleConfirm = id => {
        console.log("hi");
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining =  bookings.filter(booking => booking._id !==id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                    

                }
            })
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
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}></BookingRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default Bookings;