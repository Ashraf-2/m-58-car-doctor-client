import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    },[])
    console.log("services: ",services);
    return (
        <div className="py-5">
            <div className="text-center">
                <h3 className="text-xl font-bold text-red-500 mb-5">Service</h3>
                <h2 className="text-3xl font-bold mb-5">Our Service Area</h2>
                <p className="mb-5">the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;