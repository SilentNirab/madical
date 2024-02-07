import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const DashbordNavbar = () => {
    const { logOut, user } = useAuth();

    const handelDelete = () => {
        logOut()
        .then(
            console.log('logout')
        )
    }
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
        {
            user ?
                <li><NavLink onClick={handelDelete} to={'/login'} className="bg-[#F7A582] px-4 py-2 rounded-md" >Log Out</NavLink></li>
                :
                <li><NavLink to={'/login'} className="bg-[#F7A582] px-4 py-2 rounded-md" >Login</NavLink></li>
        }

    </>
    return (
        <div className="fixed w-full bg-[#07332F] z-10 px-20">
                <div className="navbar">
                    <div className=" navbar-start ">
                        <a className="content-end"><img className='w-48' src={logo} alt="" /></a>
                    </div>


                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu-horizontal px-1 text-white text-base space-x-5">
                            {Navlinks}
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default DashbordNavbar;