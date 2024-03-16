import luxury from "../../../assets/luxury.svg";
import mountain from "../../../assets/mountain.svg";
import houseboats from "../../../assets/houseboats.png";
import beachfront from "../../../assets/beachfront.png";
import camping from "../../../assets/camping.png";
import { useNavigate } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";

const Category = () => {
  const navigate = useNavigate();

  const locations = [
    {
      label: "Bangladesh",
      value: "bangladesh",
    },
    { label: "Nepal", value: "nepal", selected: true },
    { label: "Thailand", value: "thailand" },
  ];
  const minAges = [
    {
      label: "21",
      value: 21,
      selected: true,
    },
    { label: "22", value: 22 },
    { label: "23", value: 23 },
    { label: "24", value: 24 },
    { label: "25", value: 25 },
    { label: "26", value: 26 },
    { label: "27", value: 27 },
  ];
  const maxAges = [
    {
      label: "27",
      value: 27,
      selected: true,
    },
    { label: "28", value: 28 },
    { label: "29", value: 29 },
    { label: "30", value: 30 },
    { label: "31", value: 31 },
    { label: "32", value: 32 },
    { label: "33", value: 33 },
  ];
  const countries = [
    {
      label: "Choose location",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { label: "Bangladesh", value: "bangladesh" },
    { label: "India", value: "india" },
    { label: "Nepal", value: "nepal" },
    { label: "USA", value: "usa" },
    { label: "UK", value: "uk" },
    { label: "Canada", value: "canada" },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const minAge = form.minAge.value;
    const maxAge = form.maxAge.value;
    const country = form.country.value;
    navigate("find-partner", {
      state: {
        location: location,
        minAge: minAge,
        maxAge: maxAge,
        country: country,
      },
    });
  };
  return (
    <div className="w-full">
      <div className="w-full flex mx-3">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col items-center">
            <img className="w-8 h-8" src={luxury} alt="" />
            <p className="text-center">Luxury</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-8 h-8" src={mountain} alt="" />
            <p className="text-center">Mountain</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-8 h-8" src={camping} alt="" />
            <p className="text-center">Camping</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-8 h-8" src={beachfront} alt="" />
            <p className="text-center">Beach Front</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-8 h-8" src={houseboats} alt="" />
            <p className="text-center">Houseboats</p>
          </div>
        </div>
        <div>
          {/* <div className="py-8 md:py-24 rounded-lg">
            <form
              onSubmit={handleFormSubmit}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 items-end gap-4"
            >
              <div>
                <label className="label">
                  <span className="text-lg text-[#656565]">I am</span>
                </label>
                <select className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full">
                  {locations.map((location, i) => (
                    <option key={i} className="md:text-[20px]">
                      {location?.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="text-lg text-[#656565]">Looking for</span>
                </label>
                <select
                  name="location"
                  className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
                >
                  {locations.map((location, i) => (
                    <option
                      key={i}
                      className="md:text-[20px]"
                      value={location.value}
                      selected={location.selected}
                    >
                      {location?.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="text-lg text-[#656565]">Age</span>
                </label>
                <div className="flex justify-center items-center gap-1">
                  <select
                    name="minAge"
                    className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA]  py-[3px] text-[20px] select w-full"
                  >
                    {minAges.map((item, i) => (
                      <option
                        key={i}
                        className="md:text-[20px]"
                        value={item.value}
                        selected={item.selected}
                      >
                        {item?.label}
                      </option>
                    ))}
                  </select>
                  <span className="text-4xl text-[#656565]">-</span>
                  <select
                    name="maxAge"
                    className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[3px] text-[20px] select w-full"
                  >
                    {maxAges.map((item, i) => (
                      <option
                        key={i}
                        className="md:text-[20px]"
                        value={item.value}
                        selected={item.selected}
                      >
                        {item?.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="text-lg text-[#656565]">Country</span>
                </label>
                <select
                  name="country"
                  className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
                >
                  {countries.map((country, i) => (
                    <option
                      key={i}
                      className={`text-[20px] ${country.hidden && "hidden"}`}
                      disabled={country?.disabled}
                      value={country?.value}
                      selected={country.selected}
                    >
                      {country?.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className="text-xl font-medium px-3 col-span-full md:col-span-1 py-3 rounded uppercase text-white bg-[#ED0058] hover:bg-[#a33f64] flex justify-center items-center gap-2 md:gap-3 cursor-pointer">
                <BsSearchHeart size={25} />
                <input
                  type="submit"
                  value="Find your partner"
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
