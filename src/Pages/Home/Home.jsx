import Banner from "../../components/Banner";
import docpost from "../../assets/images/docPoster.png"
import Container from "../../components/Container";
import ServicesTab from "../../components/ServicesTabs/ServicesTab";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { SlCallOut } from "react-icons/sl";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <Container>
                <section className="py-20">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <img className=" md:h-full" src={docpost} alt="" />
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-5">
                                <h2 className="text-4xl font-bold text-black">Our Services</h2>
                                <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            </div>
                            <ServicesTab></ServicesTab>
                        </div>
                    </div>

                </section>
                <section className="py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="bg-[#07332F] text-white p-6 flex justify-center gap-4 rounded-md">
                            <div className="">
                                <CiClock2 className="text-3xl mt-2"></CiClock2>
                            </div>
                            <div className="">
                                <h3 className="text-2xl">Opening Hours</h3>
                                <p className="text-base">Open 9.00 am to 5.00pm Everyday</p>
                            </div>
                        </div>
                        <div className="bg-[#F7A582] text-white p-6 flex justify-center gap-4 rounded-md">
                            <div className="">
                                <CiLocationOn className="text-3xl mt-2"></CiLocationOn>
                            </div>
                            <div className="">
                                <h3 className="text-2xl">Our Locations</h3>
                                <p className="text-base">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                            </div>
                        </div>
                        <div className="bg-[#07332F] text-white p-6 flex justify-center gap-4 rounded-md">
                            <div className="">
                                <SlCallOut className="text-3xl mt-2"></SlCallOut>
                            </div>
                            <div className="">
                                <h3 className="text-2xl">Contact us</h3>
                                <p className="text-base">+88 01750 00 00 00</p>
                                <p className="text-base">+88 01750 00 00 00</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Testimonials></Testimonials>
                </section>
            </Container> 
        </div>
    );
};

export default Home;