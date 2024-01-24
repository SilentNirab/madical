import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";
import { CiLocationOn } from "react-icons/ci";
import { Rating } from "@smastrom/react-rating";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../components/ServicesTabs/ServicesTab.css'
import Testimonials from "../../components/Testimonials/Testimonials";

const DocProfile = () => {
    const doctor = useLoaderData();
    console.log(doctor);
    return (
        <div className="bg-[#F3F3F3]">
            <div className="bg-[#07332F] pt-28">
                <Container>

                    <h2 className="text-white py-20 text-4xl font-bold">Doctor Profile</h2>

                </Container>
            </div>
            <Container>
                <div className="py-20 ">
                    <div key={doctor._id} >
                        <div className="card md:card-side border p-5 rounded-xl bg-white">
                            <figure className="px-4 pt-4">
                                <img src={doctor.user_img} alt="Doctor" className="rounded-md w-full h-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{doctor.user_name}</h2>
                                <p className="text-[#6C6B6B]">BTP - {doctor.user_profession}</p>
                                <span className=""><Rating
                                    style={{ maxWidth: 120 }}
                                    value={doctor.rating}
                                    readOnly
                                /></span>

                                <p className="flex items-center text-[#6C6B6B]"><CiLocationOn className="text-2xl mr-1"></CiLocationOn>{doctor.user_location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-10 ">
                    <div className='bg-white min-h-screen p-10 rounded-xl'>
                        <Tabs>
                            <TabList className="border border-[#E6E6E6] rounded-md my-8 z-10  grid grid-cols-2 lg:grid-cols-4 text-center">
                                <Tab>Overview</Tab>
                                <Tab>Locations</Tab>
                                <Tab>Reviews</Tab>
                                <Tab>Business Hours</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="space-y-5">
                                    <h2 className="text-2xl font-bold text-black">About Me</h2>
                                    <p className="text-base">{doctor.doctor_about}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                                        <div className=" space-y-4">
                                            <div className="">
                                                <h2 className="text-2xl font-bold text-black">Education</h2>
                                                <p>{doctor.education}</p>
                                            </div>
                                            <div className="">
                                                <h2 className="text-2xl font-bold text-black">Work & Experience</h2>
                                                <p>{doctor.work_experience}</p>
                                            </div>
                                            <div className="">
                                                <h2 className="text-2xl font-bold text-black">Services</h2>
                                                {
                                                    doctor.services.map((service, idx) => <li key={idx}>{service}</li>)
                                                }
                                            </div>

                                        </div>
                                        <div className="col-span-2 space-y-4">
                                            <div className="">
                                                <h2 className="text-2xl font-bold text-black">Awards</h2>
                                                {doctor.additional_awards.map((award, index) => (
                                                    <li key={index}>
                                                        <strong>{award.award_title}:</strong>
                                                        <p className="mb-4">{award.award_description}</p> 
                                                    </li>
                                                ))}
                                            </div>
                                            <div className="">
                                                <h2 className="text-2xl font-bold text-black">Specializations</h2>
                                                {
                                                    doctor.specializations.map((service, idx) => <li key={idx}>{service}</li>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="space-y-5">
                                    <h2 className="text-2xl font-bold text-black">Location</h2>
                                    <p className="flex items-center text-[#6C6B6B]"><CiLocationOn className="text-2xl mr-1"></CiLocationOn>{doctor.user_location}</p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <Testimonials></Testimonials>
                            </TabPanel>
                            <TabPanel>
                                <div className="space-y-5">
                                    <header className=" text-black text-2xl font-bold mb-4">Working Hours</header>
                                    <ul className="space-y-4">
                                        <li className="link link-hover">Monday: 10 am to 7 pm</li>
                                        <li className="link link-hover">Tuesday: 10 am to 7 pm</li>
                                        <li className="link link-hover">Wednesday: 10 am to 7 pm</li>
                                        <li className="link link-hover">Thursday: 10 am to 7 pm</li>
                                        <li className="link link-hover">Friday: 10 am to 7 pm</li>
                                        <li className="link link-hover">Saturday: 10 am to 7 pm</li>
                                        <li className="link link-hover">Sunday: 10 am to 7 pm</li>
                                    </ul>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DocProfile;