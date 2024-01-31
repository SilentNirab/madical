import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Loader from "../../../components/Loader/Loader";

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ category }) => {
    const [serviceItems, setServicesItems] = useState([])
    const [loader, setLoader] = useState(false)
    const axiosSecure = useAxios()
    useEffect(() => {
        setLoader(true)
        axiosSecure.get(`service_items/${category}`)
            .then(res => setServicesItems(res.data))
            setLoader(false)
    }, [category, axiosSecure])

    if (loader) {
        return <Loader></Loader>
    }
    return (
        <div className="py-10 space-y-10">
            {
                serviceItems.length == 0 ? "" : <h3 className="text-center font-bold text-4xl">Available slots for {category}</h3>
            }
            <div className="grid grid-cols-3 gap-4">
                {
                    serviceItems.map(service => <div key={service._id} className="card bg-base-100 shadow-md">
                        <div className="flex flex-col justify-between items-center gap-5 p-6">
                            <img className="bg-[#ff415e18] rounded-full p-4" src={service.image_url} />
                            <h4 className="text-xl font-bold">{service.service_name}</h4>
                            <p className="text-base font-bold">{service.time_range}</p>
                            <button className="btn border-[#F7A582] border-2 text-[#F7A582] bg-transparent hover:bg-[#F7A582] text-base hover:text-white rounded-lg">Appoinment now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceItem;