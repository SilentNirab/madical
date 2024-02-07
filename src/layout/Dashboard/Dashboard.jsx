import { NavLink, Outlet } from "react-router-dom";
//import logo from "../../assets/images/logo.png"
import { FcMenu } from "react-icons/fc";
const Dashboard = () => {
    return (
        <div className="">
            <div className="flex bg-[#f9f9f9]">
                {/* dashboard side bar */}
                <div className="drawer md:drawer-open first-line:">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className=" flex justify-between p-4">
                            <label htmlFor="my-drawer-2" className="btn bg-[#07332F] hover:bg-[#07332fd5] drawer-button md:hidden"><FcMenu className="text-xl text-white"></FcMenu></label>
                        </div>
                        {/* dashboard content */}
                        <div className="flex-1 p-8 ">
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className=" menu px-0 w-80 min-h-full bg-white text-[#898989]">

                            <li className="  font-bold text-lg">
                                <NavLink to="/dashboard/appointments" className={({ isActive }) => isActive ? "  bg-[#f9f9f9] text-black pl-20 p-4 rounded-none hover:rounded-none active:bg-black" : "pl-20 p-4 hover:rounded-none"}>
                                My Appointments</NavLink>
                            </li>
                            <li className="  font-bold text-lg">
                                <NavLink to="/" className={({ isActive }) => isActive ? "  bg-[#f9f9f9] text-black pl-20 p-4 rounded-none " : "pl-20 p-4 hover:rounded-none"}>
                                    Home</NavLink>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;