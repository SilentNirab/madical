import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='py-20 space-y-5'>
            <div className="space-y-5 max-w-4xl text-center mx-auto">
                <h2 className="text-4xl font-bold text-black">Our Services</h2>
                <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            </div>
            <Swiper slidesPerView={2}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide><Testimonials></Testimonials></SwiperSlide>
                <SwiperSlide><Testimonials></Testimonials></SwiperSlide>
                <SwiperSlide><Testimonials></Testimonials></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;