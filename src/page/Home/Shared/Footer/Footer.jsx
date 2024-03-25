import { Link } from "react-router-dom";
import logo2 from "../../../../assets/logo2.svg";
import { FiHome } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="py-16 text-white bg-[#1E1E1E]">
        <div className="container mx-auto">
          <div>
            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-4 border-b-2 border-gray-400">
              <div>
                <a href="/">
                  <img alt="Logo" className="h-12" src={logo2} />
                </a>
                <p className="mt-4 mb-8">
                  Join our network and grow <br /> your business!
                </p>

                <Link to="/">
                  <div className="bg-[#222222] flex gap-2 items-center text-sm p-3 w-[170px]">
                    <FiHome /> List your property
                  </div>
                </Link>
              </div>
              <div>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/teams">Teams / Careers</a>
                  </li>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/support">Support</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mt-4 space-y-2 ">
                  <li>
                    <a href="/terms">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="/policies">Guest Policies</a>
                  </li>
                  <li>
                    <a href="/policies">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/trust">Trust And Safety</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Download Gbooky</h3>
                <div className="flex flex-col gap-5 my-6">
                  <div className="flex items-center border rounded-lg px-4 py-2 w-52 bg-black">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                      className="w-7 md:w-8"
                    />
                    <div className="text-left ml-3">
                      <p className="text-xs text-gray-200 uppercase">
                        Get it on
                      </p>
                      <p className="text-sm md:text-base">Google Play</p>
                    </div>
                  </div>
                  <div className="flex items-center border rounded-lg px-4 py-2 w-52 bg-black">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                      className="w-7 md:w-8"
                    />
                    <div className="text-left ml-3">
                      <p className="text-xs text-gray-200 uppercase">
                        Get it on
                      </p>
                      <p className="text-sm md:text-base">Apple Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex justify-between text-sm">
            <div>© 2024 Gbooky LTD.</div>
            <div className="flex gap-3 mr-10">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
