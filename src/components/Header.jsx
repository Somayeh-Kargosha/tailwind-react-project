import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsFillPeopleFill, BsThreeDots } from "react-icons/bs";
import { FaHome, FaTh } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineSearch } from "react-icons/md";
// import DotsMenu from "./DotsMenu";

function Header() {
  const className =
    "hover:border-b-2 hover:border-gray-700 opacity-60 flex flex-col items-center hover:opacity-100";

  return (
    <>
      <header className="sticky z-10 top-0 container max-w-full py-[2px] bg-white border-b">
        <div className="container mx-auto lg:max-w-full px-2 md:max-w-4xl">
          <nav className="flex items-center md:justify-between justify-between lg:justify-around xl:justify-evenly ">
            <div className="flex">
              <a href="">
                <img
                  src="public/Linkedin_logo_initials.png"
                  alt=""
                  className="md:w-[34px] md:h-[34px] w-7 h-7"
                />
              </a>
              <div className="relative">
                <MdOutlineSearch className="absolute md:left-4 left-2 lg:top-2 md:top-[1px] lg:text-lg md:text-4xl text-2xl top-[2px]" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="bg-blue-100 p-[5px] ml-1 w-72 rounded placeholder:text-right lg:block hidden lg:placeholder:mr-10 placeholder:text-sm"
                />
              </div>
            </div>
            <ul className="items-center flex space-x-6 text-[10px] font-semibold">
              <li>
                <a className={className} href="#">
                  <FaHome className="text-2xl" />
                  <span className="hidden md:block">Home</span>
                </a>
              </li>
              <li>
                <a className={className} href="#">
                  <BsFillPeopleFill className="text-2xl" />

                  <span className="hidden md:block">My Network</span>
                </a>
              </li>
              <li>
                <a className={className} href="">
                  <ImBriefcase className="text-2xl" />
                  <span className="hidden md:block">Jobs</span>
                </a>
              </li>
              <li>
                <a className={className} href="">
                  <BiSolidMessageRoundedDetail className="text-2xl" />
                  <span className="hidden md:block">Messaging</span>
                </a>
              </li>
              <li>
                <a className={className} href="">
                  <IoNotifications className="text-2xl" />

                  <span className="hidden md:block">Notifications</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:border-b-2 hover:border-gray-700 flex flex-col items-center"
                  href=""
                >
                  <img
                    src="public/1712557029181.jpeg"
                    alt=""
                    className="rounded-full h-[28px] w-[28px]"
                  />
                  <span className="opacity-60 hover:opacity-100 hidden md:block">
                    Me
                    <MdOutlineArrowDropDown className="inline text-xl" />
                  </span>
                </a>
              </li>
              <li className="hidden md:block">
                <a className={className} href="">
                  <FaTh className="text-2xl" />
                  <span>For Business</span>
                </a>
              </li>
              <li className="hidden md:block">
                <a className={className} href="">
                  <img src="public/premium.svg" alt="" className="w-20 h-6" />
                  <span>Upgrade to Premium</span>
                </a>
              </li>
              <li className="md:hidden">
                <button className={`text-2xl ${className}`}>
                  <BsThreeDots />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <DotsMenu /> */}
    </>
  );
}

export default Header;
