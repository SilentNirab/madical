import Loader from "../../../components/Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

const Appointments = () => {
    const axiosSecure = useAxios()
    const { user, loading } = useAuth()
    const email = user?.email;
    console.log(email);
    const [appointments, setAppointments] = useState()
    console.log(appointments);

    useEffect(() => {
            axiosSecure.get(`appointments/${email}`)
                .then(res => setAppointments(res.data))
                .catch(error => console.error("Error fetching appointments:", error));
        
    }, [axiosSecure, email]);

    if (loading) {
        return <Loader></Loader>;
    }
   
return (
    <div className="space-y-10">
        <h2 className=" font-bold text-2xl">My Appointments: {appointments?.length}</h2>
        <div className="overflow-x-auto">
            <table className="table bg-white rounded-lg">
                {/* head */}
                <thead className="">
                    <tr className="bg-gray-300 rounded-lg uppercase">
                        <th>Index</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>TREATMENT</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody className="px-4">
                    {
                        appointments?.map((product, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product?.date}</td>
                            <td>{product?.time}</td>
                            <td>{product?.treatment}</td>
                            <td><button className="btn bg-green-900 text-white">Pay</button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Appointments;