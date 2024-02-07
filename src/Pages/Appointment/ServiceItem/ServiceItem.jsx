import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Loader from "../../../components/Loader/Loader";
import { IoMdClose } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const ServiceItem = ({ category, selectedDate }) => {
    const {user} = useAuth()
    
    const [serviceItems, setServicesItems] = useState([])
    const [loader, setLoader] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
    });

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

    const handleSubmit = (id,treatment,time, e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const date = document.querySelector('[name="date"]').innerText;
        const name = form.get("name");
        const email = form.get("email");
        const number = form.get("number");
        const user_email = user.email;
        const appointment = { name, email, number, date, time, treatment, user_email }

        console.log(appointment);
        axiosSecure.post('/appointments', appointment)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error adding appointment:", error);
            });

            setFormData({
                name: "",
                email: "",
                number: "",
            });
    
    };
    return (
        <div className="py-10 space-y-10">
            {
                serviceItems?.length == 0 ? "" : <h3 className="text-center font-bold text-4xl">Available slots for {category}</h3>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    serviceItems.map(service => <div key={service?._id} className="card bg-base-100 shadow-md">
                        <div className="flex flex-col justify-between items-center gap-5 p-6">
                            <img className="bg-[#ff415e18] rounded-full p-4" src={service?.image_url} />
                            <h4 className="text-xl font-bold">{service?.service_name}</h4>
                            <p className="text-base font-bold">{service?.time_range}</p>

                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn hover:border-[#F7A582] border-2 hover:text-[#F7A582] hover:bg-transparent bg-[#F7A582] text-base text-white rounded-lg" onClick={() => document.getElementById(`my_modal_5${service?._id}`).showModal()}>BOOK APPOINTMENT</button>
                            <dialog id={`my_modal_5${service?._id}`} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box relative">
                                    <form className="space-y-4" onSubmit={(e)=>handleSubmit(service?._id,service.service_name,service.time_range, e)}>
                                        <p className="font-bold text-lg"  name="service" >{service.service_name}</p>
                                        <p className="p-4 bg-[#E6E6E6] rounded-md" name="date">{selectedDate}</p>
                                        <p className="p-4 bg-[#E6E6E6] rounded-md" name="time">{service.time_range}</p>
                                        <input className="bg-[#FFFFFF0D] border-2 border-[#CFCFCF] w-full rounded-md p-4 focus:outline-none placeholder:text-black" placeholder="Name" value={formData.name} name='name' onChange={e => setFormData({ ...formData, name: e.target.value })}/>
                                        <input className="bg-[#FFFFFF0D] border-2 border-[#CFCFCF] w-full rounded-md p-4 focus:outline-none placeholder:text-black" placeholder="Email" value={formData.email} name='email' onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                        <input className="bg-[#FFFFFF0D] border-2 border-[#CFCFCF] w-full rounded-md p-4 focus:outline-none placeholder:text-black" type="number" placeholder="Mobile Numder" value={formData.number} name='number' onChange={e => setFormData({ ...formData, number: e.target.value })} />
                                           
                                        <input className="bg-[#07332F] w-full p-2 rounded-md text-white" type="submit" value="SUBMIT" />
                                    </form>
                                    <div className="modal-action absolute -top-2 right-2">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="bg-[#07332F] p-2 rounded-full text-white"><IoMdClose /></button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceItem;