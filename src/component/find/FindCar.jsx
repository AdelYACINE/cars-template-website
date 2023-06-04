import "./FindCar.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FindCar = () => {
  return (
    <div className="find-container">
      <div className="find-heading-container">
        <h1 className="find-heading">Find your drive</h1>
      </div>
      <div className="find-text-container">
        <p className="find-text">
          Explore the world's largets car sharing marketplace
        </p>
      </div>
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            412: {
              slidesPerView: 2,
            },
            540: {
              slidesPerView: 3,
            },
            912: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car3.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Lambo</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car5.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Skoda</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car6.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Mercedes</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car7.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Ferrari</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car8.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Porshe</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car9.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Skoda</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car1.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">BMW</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car11.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Chevrolet</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car10.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Mclaren</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/carsImgs/car4.jpg" alt="pic.1" className="img" />
              <h2 className="card-text">Mustang</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FindCar;
