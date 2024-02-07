import './style.css';
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar, CiLocationOn, CiMobile2 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
const ContactUs = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const number = form.get("number");
        const docName = form.get("doc-name");
        const date = form.get("date");
        const time = form.get("time");
        const appoinment = { name, email, number, docName, date, time }
        console.log(appoinment);
    }

    return (
        <div className="bg-[#07332F] p-20 rounded-lg my-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                <div className="max-w-sm text-white space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl font-bold">Contact With Us</h2>
                    <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <p className="flex items-center text-center justify-center lg:justify-start lg:text-left"><CiMobile2 className="text-2xl mr-1"></CiMobile2>+88 01750 14 14 14</p>
                    <p className="flex items-center text-center justify-center lg:justify-start  lg:text-left"><CiLocationOn className="text-2xl mr-1"></CiLocationOn>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
                <form className="w-full grid grid-cols-2 gap-4 text-white" onSubmit={handleSubmit}>
                    <input className="bg-[#FFFFFF0D] rounded-md p-4 col-span-2 md:col-span-1 placeholder:text-white" placeholder="Name" name='name' />
                    <input className="bg-[#FFFFFF0D] rounded-md p-4 col-span-2 md:col-span-1  placeholder:text-white" placeholder="Email" name='email' />
                    <input className="bg-[#FFFFFF0D] rounded-md p-4 col-span-2 md:col-span-1  placeholder:text-white" type="number" placeholder="Mobile Numder" name='number' />
                    <input className="bg-[#FFFFFF0D] rounded-md p-4 col-span-2 md:col-span-1  placeholder:text-white" placeholder="Doctor Name" name='doc-name' />

                   <div className="col-span-2 md:col-span-1 bg-[#FFFFFF0D] rounded-md p-4 relative">
                   <DatePicker
                        className="text-white bg-transparent focus:outline-none"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Date"
                        name='date'

                    />
                    <CiCalendar className="text-2xl mr-1 text-white absolute top-4 right-4"></CiCalendar>
                   </div>
                    <div className='col-span-2 md:col-span-1 bg-[#FFFFFF0D] rounded-md p-4 relative'>
                        <DatePicker
                            className="text-white bg-transparent focus:outline-none "
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            placeholderText="Time"
                            name='time'
                        />
                        <span><FaAngleDown className="text-xl text-white absolute top-4 right-4"></FaAngleDown></span>
                    </div>
                    <input className="bg-[#F7A582] text-xl py-2 hover:bg-[#ca8668] text-white rounded-lg col-span-2" type="submit" value="Book Now" />

                </form>
            </div>
        </div>
    );
};

export default ContactUs;