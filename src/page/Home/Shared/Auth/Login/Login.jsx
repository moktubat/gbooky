import signUp from "../../../../../assets/signUp.jpg";
const Login = () => {
  return (
    <div>
      <div className="w-full flex mb-10 mx-4 overflow-hidden">
        <div className="relative hidden lg:block">
          <img src={signUp} alt="" />
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl font-bold pb-32">Multipurpose tool to succeed your business</p>
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-2/5 h-screen lg:px-16 flex items-center justify-center">
          <div className="w-full mr-7 md:mr-0">
            <h1 className="text-xl md:text-2xl font-bold md:mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-[#775DA6] hover:text-[#43345e] focus:text-[#43345e]"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-[#8468b9] hover:bg-[#775DA6] focus:bg-[#654f8d] text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Sign In
              </button>
            </form>

            <div className="my-8 border-gray-300 w-full"></div>

            <div className="flex justify-between">
              <button
                type="button"
                className="block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-2 py-2 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-2">Log in with Google</span>
                </div>
              </button>
              <button className="block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-2 py-2 border border-gray-300">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="#1877F2"
                      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                    />
                    <path
                      fill="#ffffff"
                      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                    />
                  </svg>

                  <span className="ml-2">Log in with Facebook</span>
                </div>
              </button>
            </div>

            <p className="flex justify-between mt-8">
              <p>Don&apos;t have an account?</p>
              <a
                href="#"
                className="text-[#775DA6] hover:text-[#43345e] font-semibold"
              >
                Create an account
              </a>
            </p>

            <p className="mt-12 text-[#898989]">
              Protected by reCAPTCHA and subject to the Rhombus{" "}
              <a href="#" className="text-[#775DA6]">
                 Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#775DA6]">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
