import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { useEffect } from 'react';
import { BiSolidQuoteLeft } from 'react-icons/bi';

const Testimonials = () => {
    const [testimonials, setTestimonils] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setTestimonils(data))
    }, [])
    return (
        <div className='py-20 space-y-10'>
            <div className="space-y-5 max-w-4xl text-center mx-auto">
                <h2 className="text-4xl font-bold text-black">What Our Patients Says</h2>
                <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            </div>
            <Swiper 
            slidesPerView={1}
            breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={30}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                {
                    testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className='border border-[#bebbbb] rounded-md p-10 space-y-5'>
                            <div className="flex justify-between">
                               <div className="flex">
                               <img src={testimonial.user_img} alt="" />
                                <div className=" ml-5">
                                    <p className='text-xl font-bold'>{testimonial.user_name}</p>
                                    <p>{testimonial.user_profession}</p>
                                </div>
                               </div>
                                <BiSolidQuoteLeft className='text-5xl text-[#F7A582]'></BiSolidQuoteLeft>
                            </div>
                            <p>{testimonial.user_comment}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;