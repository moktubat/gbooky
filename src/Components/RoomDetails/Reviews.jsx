import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={false}
        pagination={true}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // When window width is >= 768px (desktop)
          768: {
            slidesPerView: 2,
          },
          // When window width is < 768px (mobile)
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-white mt-4 px-4 py-3 rounded-lg">
          <div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-medium">Cleanliness</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Communication</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Check-in</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <img
              src="https://static-00.iconduck.com/assets.00/person-icon-950x1024-fy2qylik.png"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="capitalize text-lg md:text-xl font-bold">
                Mikasa
              </h2>
              <p className="text-gray-500">April 2023</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tempore sint deserunt eos ullam eum.
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white mt-4 px-4 py-3 rounded-lg">
          <div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-medium">Cleanliness</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Communication</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Check-in</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <img
              src="https://static-00.iconduck.com/assets.00/person-icon-950x1024-fy2qylik.png"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="capitalize text-lg md:text-xl font-bold">
                Mikasa
              </h2>
              <p className="text-gray-500">April 2023</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tempore sint deserunt eos ullam eum.
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white mt-4 px-4 py-3 rounded-lg">
          <div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-medium">Cleanliness</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Communication</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Check-in</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <img
              src="https://static-00.iconduck.com/assets.00/person-icon-950x1024-fy2qylik.png"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="capitalize text-lg md:text-xl font-bold">
                Mikasa
              </h2>
              <p className="text-gray-500">April 2023</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tempore sint deserunt eos ullam eum.
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white mt-4 px-4 py-3 rounded-lg">
          <div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-medium">Cleanliness</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Communication</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Check-in</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <img
              src="https://static-00.iconduck.com/assets.00/person-icon-950x1024-fy2qylik.png"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="capitalize text-lg md:text-xl font-bold">
                Mikasa
              </h2>
              <p className="text-gray-500">April 2023</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tempore sint deserunt eos ullam eum.
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white mt-4 px-4 py-3 rounded-lg">
          <div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-medium">Cleanliness</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Communication</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Check-in</p>
              <Rating
                className="py-3"
                style={{ maxWidth: 100 }}
                value={4}
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <img
              src="https://static-00.iconduck.com/assets.00/person-icon-950x1024-fy2qylik.png"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="capitalize text-lg md:text-xl font-bold">
                Mikasa
              </h2>
              <p className="text-gray-500">April 2023</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tempore sint deserunt eos ullam eum.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
