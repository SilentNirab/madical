import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceItem from "../ServiceItem/ServiceItem";

// eslint-disable-next-line react/prop-types
const Services = ({category}) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-5">
            <h3 className="text-center font-bold text-4xl">Please select a service.</h3>
            <div className="grid grid-cols-3 gap-4 py-10">
                {
                    services.map(service => <Link
                     category={`${service.service}`} key={service._id} className="card bg-base-100 shadow-md">
                        <div className="flex justify-between items-center gap-5 p-6">
                            <img className="bg-[#ff415e18] rounded-lg p-4" src={service.image_url} />
                            <p className="text-2xl font-bold gap-4">{service.service}</p>
                        </div>
                    </Link>)
                }
            </div>
            <ServiceItem category={category}></ServiceItem>
        </div>
    );
};

export default Services;