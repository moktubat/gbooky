import {
  FaCarSide,
  FaLocationDot,
  FaStar,
  FaTv,
  FaWifi,
} from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { TbAirConditioning, TbBeach } from "react-icons/tb";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { BsCalendar2Date } from "react-icons/bs";
import { HiOutlineBoltSlash } from "react-icons/hi2";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.png";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import Map from "./Map";

const RoomDetails = () => {
  return (
    <div className="px-3 py-4 bg-[#EBF0F4]">
      <div>
        <h1 className="font-semibold text-[32px] text-black">
          Cosy vibes in central Vesterbro
        </h1>
        <div className="flex justify-between items-center">
          <div className="md:flex items-center gap-6">
            <div className="flex bg-[#091646] gap-5 px-4 py-2">
              <p className="flex items-center gap-2 text-white">
                <FaStar className="text-[#FFB61D]" /> 4.45
              </p>
              <p className="text-[#FFB61D]">23 Reviews</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-lg">
                <MdOutlineLocationOn /> Dhanmondi, Dhaka
              </p>
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2 text-lg">
              <FiShare /> Share
            </p>
          </div>
        </div>

        <div>
          <div className="mx-auto py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                  <img
                    src={room1}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                  <img
                    src={room2}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img
                      src={room3}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </div>
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img
                      src={room4}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466322708.jpg?k=3fbee6c71a36ca722f470e28701ffa4ae7a5d1366e507d291d1b572ed2de0979&o=&hp=1"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex w-full gap-4">
            <div className="w-3/5">
              <div className="bg-white flex px-4 py-2 justify-between rounded-lg">
                <h2 className="text-xl font-semibold">Room Details</h2>
                <p className="flex items-center gap-6">
                  Only 5 hours left to book.
                  <IoMdTime className="text-red-500" />
                </p>
              </div>

              <div>
                <div className="bg-white flex items-center px-4 py-2 mt-4 justify-between rounded-lg">
                  <h3 className="text-lg font-semibold">
                    What this place offers
                  </h3>
                  <p className="font-semibold border border-gray-600 px-4 py-1 rounded-lg">
                    Show all 30 facilities
                  </p>
                </div>

                <div className="bg-white grid grid-cols-3 gap-x-4 gap-y-8 justify-between px-4 py-4 rounded-lg">
                  <div className="flex gap-3 items-center">
                    <FaTv className="text-2xl" />
                    <p>TV</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <TbBeach className="text-2xl" />
                    <p>Beach access - Beachfront</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <LiaSwimmingPoolSolid className="text-2xl" />
                    <p>Private Pool</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaWifi className="text-2xl" />
                    <p>Wifi</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaCarSide className="text-2xl" />
                    <p>Free parking on premises</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <TbAirConditioning className="text-2xl" />
                    <p>Air conditioning</p>
                  </div>
                </div>

                <div className="bg-white px-4 py-2 rounded-xl mt-4">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex gap-3 items-center">
                        <img
                          className="block mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0"
                          src="https://tailwindcss.com/img/erin-lindford.jpg"
                          alt="Woman's Face"
                        />
                        <div>
                          <p className="text-lg text-black font-semibold">
                            Hosted by Redena
                          </p>
                          <p className="text-slate-500 font-medium">
                            10 years hosting
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 font-medium">
                        My background. I was a Real Estate Negotiator in <br />{" "}
                        Kuala Lumpur ..
                        <a href="" className="text-blue-500">
                          Read More
                        </a>
                      </p>
                    </div>
                    <div>
                      <p>Languages: English</p>
                      <p>Response rate: 99%</p>
                      <p>Response time: 01 hours</p>
                      <p className="mt-4 py-2 px-4 text-lg font-bold border border-gray-500 rounded-lg text-center">
                        Contact Host
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-2/5 rounded-lg">
              <div className="flex justify-between items-center px-4 py-2">
                <h2>
                  <span className="text-2xl font-bold">BDT 3000</span> night
                </h2>
                <p className="flex items-center gap-2">
                  <FaStar className="text-[#FFB61D]" /> 4.45
                </p>
              </div>
              <div className="m-4 border border-gray-500 rounded-lg px-4 py-2 my-2">
                <div className="w-full flex text-center ">
                  <div className="w-1/2">
                    <p>CHECK-IN</p>
                    <input
                      type="date"
                      name="checkin"
                      id="checkin"
                      className="h-8 pl-2 text-sm bg-gray-100 border"
                    />
                  </div>
                  <div className="w-1/2">
                    <p>CHECK-OUT</p>
                    <input
                      type="date"
                      name="checkin"
                      id="checkin"
                      className="h-8 pl-2 text-sm bg-gray-100 border"
                    />
                  </div>
                </div>
                <div className="my-2 text-center">
                  <p>GUESTS</p>
                  <p>1 guest</p>
                </div>
              </div>
              <p className="text-center py-4 mx-4 my-4 bg-[#091646] text-white font-semibold rounded-md cursor-pointer">
                Reserve
              </p>
              <p className="text-center">You wont be charged yet</p>
              <div className="flex justify-between mx-4 my-3">
                <p>Add Breakfast</p>
                <p>- 1 +</p>
                <p>BDT 100</p>
              </div>
              <div className="font-bold flex justify-between mx-4 my-3">
                <p>Total before taxes</p>
                <p>$602</p>
              </div>
            </div>
          </div>

          <div className="bg-white flex justify-between items-center mt-4 px-4 py-3 rounded-lg">
            <div>
              <div className="flex gap-2 items-center font-semibold">
                <BsCalendar2Date />
                <p>Free cancellation for 48 hours</p>
              </div>
              <div className="flex gap-2 items-center font-semibold">
                <FaLocationDot />
                <p>Great location</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center font-semibold">
                <HiOutlineBoltSlash />
                <p>Report this listing</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4 bg-white flex justify-between items-center px-4 py-3 rounded-lg">
              <h2 className="font-bold text-2xl">Reviews</h2>
              <Link className="text-lg border border-gray-500 px-6 py-2 rounded-lg">
                See All Reviews
              </Link>
            </div>
            <div>
              <Reviews></Reviews>
            </div>
          </div>
          <div>
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
