import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";

const CheckOut = () => {
    const {user} = useContext(AuthContext);

    const service = useLoaderData();
    console.log(service);
    const { title,price,_id,img } = service;

    // console.log(user.displayName);
    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const date = form.date.value;
        console.log(email,name,price,description,date)
        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            service_id:_id,
            price:price,
            img
            
        }
        console.log("order :",booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
                swal("congress", "You purchased our service successfully","success");
            }
            form.reset();
        })
    }
    return (
        <div>
            <h2>Book Service: {title} </h2>
            <div className="max-w-3xl mx-auto p-5 my-5 rounded-md bg-gray-200">
                <form onSubmit={handleBookService} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="w-full">
                            <input type="text" className="w-full px-2 h-8  rounded-sm" name="name" placeholder="Name" />
                        </div>
                        <div className="w-full">
                            <input type="date" className="w-full px-2  h-8 rounded-sm" name="date" placeholder="Date" />
                        </div>


                        <div className="w-full">
                            <input type="email" className="w-full px-2  h-8 rounded-sm" defaultValue={user?.email} name="email" placeholder="Email" />
                        </div>
                        <div className="w-full" >
                            <input type="text" className="w-full px-2  h-8  rounded-sm" name="price" defaultValue={price} placeholder="$ price" />
                        </div>
                    </div>
                    <div className="my-2 rounded">
                        <textarea name="description" className="w-full h-20 px-2" placeholder="product description" ></textarea>
                    </div>
                    <div className="w-full">
                        <input type="submit" className="btn bg-red-500 outline-none  text-white hover:bg-red-500 btn-block normal-case" value="Order Confirm" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CheckOut;