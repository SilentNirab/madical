import Calender from "../../components/Calender/Calender";
import Container from "../../components/Container";
import chair from "../../assets/images/chair.png"
import { useState } from "react";
import { format } from "date-fns";
import Services from "./Services/Services";
const Appointment = () => {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);
    

    const date = selectedDay ? (
      <p className="text-center text-[#F7A582] text-xl">Available Services on {format(selectedDay, 'PPP')}.</p>
    ) : (
      <p className="text-center text-[#F7A582] text-xl">Available Services on</p>
    );
    return (
        <div>
            <div className="bg-[#F3F3F3]">
                <div className="bg-[#07332F] pt-28">
                    <Container>
                        <h2 className="text-white py-20 text-4xl font-bold">Appointment</h2>
                    </Container>
                </div>
                <section className="bg-top  bg-[url('assets/images/doc-bg.png')] z-auto">
                    <Container>
                        <div className="flex justify-between py-20">
                            <div className="">
                                <Calender selected={selectedDay} onSelect={setSelectedDay}></Calender>
                            </div>
                            <div className="">
                                <img src={chair} alt="" />
                            </div>
                        </div>
                        <div className="">
                            <span>{date}</span>
                        </div>
                        <Services></Services>
                    </Container>
                </section>
            </div>
        </div>
    );
};

export default Appointment;