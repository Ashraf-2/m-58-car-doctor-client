import {BsArrowRight} from "react-icons/bs"
const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    // console.log(service)
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure><img className="h-[208px]" src={img} alt={title} /></figure>
            <div className="text-left pl-2 pt-5">
                <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-red-500 text-xl">Price: ${price}</p>
                    <button className="btn btn-circle text-red-500 bg-white "><BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;