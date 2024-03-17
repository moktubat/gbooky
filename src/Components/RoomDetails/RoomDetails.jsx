import { FaStar } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

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
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img
                      src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </div>
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img
                      src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="flex w-full">
            <div className="w-3/5">
              <div className="flex bg-white w-full px-4 py-2 justify-between rounded-lg">
                <h2>Room Details</h2>
                <p className="flex items-center gap-6">
                  Only 5 hours left to book.
                  <IoMdTime className="text-red-500" />
                </p>
              </div>
            </div>
            <div className="w-2/5">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
