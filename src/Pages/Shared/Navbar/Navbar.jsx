import { useState } from 'react';
import logo from '../../../assets/images/logo.png'
import Container from '../../../components/Container';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeColor);
    const Navlinks = <>
        <li>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? " border-b border-white" : " "} >Home</NavLink></li>
        <li>
            <NavLink to={'/about'} className={({ isActive }) =>
                isActive ? " border-b border-white" : " "} >About</NavLink></li>
        <li>
            <NavLink to={'/appointment'} className={({ isActive }) =>
                isActive ? " border-b border-white" : " "} >Appointment</NavLink></li>
        <li>
            <NavLink to={'/login'} className={({ isActive }) =>
                isActive ? " border-b border-white" : " "} >Login</NavLink></li>
    </>
    return (
        <div className={`fixed w-full ${navbar ? 'bg-[#07332F;]' : 'bg-transparent  pt-5 md:pt-8'} `}>
            <Container>
                <div className="navbar">
                    <div className=" navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {Navlinks}
                            </ul>
                        </div>
                        <a className="content-end"><img className='w-48' src={logo} alt="" /></a>
                    </div>


                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu-horizontal px-1 text-white text-base space-x-5">
                            {Navlinks}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;