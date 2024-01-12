import logo from '../../../assets/images/logo2.png'
import Container from '../../../components/Container';
const Footer = () => {
    return (
        <footer className="bg-[#F3F3F3] py-10">
            <Container>
                <div className="text-base-content footer ">
                    <aside className='space-y-4'>
                        <img src={logo} />
                        <p className='max-w-72 text-[#6C6B6B]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                        <button className="btn border-[#F7A582] border-2 text-[#F7A582] bg-transparent hover:bg-[#F7A582] text-base hover:text-white rounded-lg">Appointment</button>
                    </aside>
                    <nav className='font-bold text-[#6C6B6B]'>
                        <header className=" text-black text-2xl font-bold mb-4">Quick Links</header>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Service</a>
                        <a className="link link-hover">Doctors</a>
                        <a className="link link-hover">Departments</a>
                        <a className="link link-hover">Online Payment</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">My Account</a>
                    </nav>
                    <nav className='font-bold text-[#6C6B6B]'>
                        <header className=" text-black text-2xl font-bold mb-4">Doc House Services</header>
                        <a className="link link-hover">Pediatric</a>
                        <a className="link link-hover">Diagnosis</a>
                        <a className="link link-hover">Cardiac</a>
                        <a className="link link-hover">Laboratory Analysis</a>
                        <a className="link link-hover">Gynecological</a>
                        <a className="link link-hover">Personal Counseling</a>
                        <a className="link link-hover">Dental</a>
                    </nav>
                    <nav className='font-bold text-[#6C6B6B]'>
                        <header className=" text-black text-2xl font-bold mb-4">Working Hours</header>
                        <a className="link link-hover">Monday: 10 am to 7 pm</a>
                        <a className="link link-hover">Tuesday: 10 am to 7 pm</a>
                        <a className="link link-hover">Wednesday: 10 am to 7 pm</a>
                        <a className="link link-hover">Thursday: 10 am to 7 pm</a>
                        <a className="link link-hover">Friday: 10 am to 7 pm</a>
                        <a className="link link-hover">Saturday: 10 am to 7 pm</a>
                        <a className="link link-hover">Sunday: 10 am to 7 pm</a>
                    </nav>
                </div>
                <div className="text-center py-4 border-t border-[#CECECE] mt-5">
                    <span className='text-[#6C6B6B]'>Copyright © 2022 - All right reserved by Doc House Ltd</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;