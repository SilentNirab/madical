import Container from "./Container";
import doctors from "../assets/images/doctors.png"
const Banner = () => {
    return (
        <div className="bg-cover bg-center h-screen bg-[url('assets/images/banner.png')]">
            <Container>
                <div className="h-screen">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-full">
                        <div className="space-y-6 text-center">
                            <h1 className=" text-4xl mt-4 md:mt-0 md:text-6xl text-white font-semibold">Your Best Medical Help Center</h1>
                            <p className="max-w-md">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry &rsquo;s stardard.</p>
                            <button className="btn bg-[#F7A582] hover:bg-[#ca8668] text-white rounded-lg">All Service</button>
                        </div>
                        <div className="w-8/12 md:w-10/12">
                            <img className="w-full" src={doctors} alt="doctors" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;