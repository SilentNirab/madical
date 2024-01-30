import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

// eslint-disable-next-line react/prop-types
const ServiceItem = () => {
    const category = 'Teeth Orthodontics'
    const [serviceItems, setServicesItems] = useState([])
    const axiosSecure = useAxios()
    useEffect(() => {
        axiosSecure.get(`service_items/${category}`)
            .then(res => setServicesItems(res.data))
    }, [axiosSecure])
    return (
        <div className="">
            <h3 className="text-center font-bold text-4xl">Available slots for {category}</h3>
            <div className="grid grid-cols-3 gap-4">
                {
                    serviceItems.map(service => <div key={service._id} className="card bg-base-100 shadow-md">
                        <div className="flex flex-col justify-between items-center gap-5 p-6">
                            <img className="bg-[#ff415e18] rounded-full p-4" src={service.image_url} />
                            <h4 className="text-xl font-bold">{service.service_name}</h4>
                            <p className="text-base font-bold">{service.time_range}</p>
                            <button>Appoinment now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceItem;