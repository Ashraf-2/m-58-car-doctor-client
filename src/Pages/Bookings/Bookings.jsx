import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            <h2>Bookings</h2>

            
        </div>
    );
};

export default Bookings;