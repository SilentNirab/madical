import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { CiCalendar, CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors);
    return (
        <div>
            <div className="space-y-5 max-w-4xl text-center mx-auto">
                <h2 className="text-4xl font-bold text-black">Our Expert Doctors</h2>
                <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-10">
                {
                    doctors.map(doctor => <div key={doctor._id} >
                        <div className="card max-w-96 bg-base-100 border border-gray-200">
                            <figure className="px-4 pt-4">
                                <img src={doctor.user_img} alt="Doctor" className="rounded-xl w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{doctor.user_name}</h2>
                                <p className="text-[#6C6B6B]">BTP - {doctor.user_profession}</p>
                                <span className="mb-3"><Rating
                                    style={{ maxWidth: 120 }}
                                     value={doctor.rating}
                                    readOnly
                                /></span>
                                <hr />
                                <div className="space-y-3 text-[#6C6B6B] text-base mt-2">
                                <p className="flex items-center"><CiLocationOn className="text-2xl mr-1"></CiLocationOn>{doctor.user_location}</p>
                                <p className="flex items-center"><CiCalendar className="text-2xl mr-1"></CiCalendar>{doctor.testimonial_date}</p>
                                <p className="flex items-center"><CiDollar className="text-2xl mr-1"></CiDollar>${doctor.consultation_fee}</p>
                                </div>
                                <div className="card-actions">
                                  <Link to={`docprofile/${doctor._id}`}> <button className="btn border-[#F7A582] border-2 text-[#F7A582] bg-transparent hover:bg-[#F7A582] text-base hover:text-white rounded-lg w-full mt-3">View Profile</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Doctors;