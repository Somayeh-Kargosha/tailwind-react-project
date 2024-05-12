import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsFillPeopleFill, BsThreeDots } from "react-icons/bs";
import { FaHome, FaTh } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineSearch } from "react-icons/md";
import DotsNav from "./DotsNav";
import { useState } from "react";

function Header() {
  const [openDropDownNav, setOpenDropDownNav] = useState(false);
  // const [selected, setSelected] = useState(false);
  const className =
    "hover:border-b-2 hover:border-gray-700 opacity-60 flex flex-col items-center hover:opacity-100";

  return (
    <>
      <header className="sticky z-10 top-0 md:py-[2px] py-[7px] container md:px-[8px] px-1 max-w-full bg-white border-b">
        <div className="container md:max-w-6xl max-w-[580px] mx-auto flex items-center lg:justify-between md:justify-around justify-between space-x-2">
          <div className="max-w-[480px] flex space-x-2 items-center">
            <a href="">
              <img
                src="public/Linkedin_logo_initials.png"
                alt=""
                className="md:w-[38px] md:h-[38px] w-7 h-7"
              />
            </a>
            <div className="max-w-[280px] relative">
              <div className="md:hidden lg:block hidden">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="py-[6px] px-[42px] bg-blue-100 rounded placeholder:text-right text-right placeholder:text-sm"
                />
                <MdOutlineSearch className="absolute text-xl top-2 left-4" />
              </div>
              <button className="lg:hidden flex flex-col items-center font-bold opacity-70">
                <MdOutlineSearch className="md:text-2xl text-3xl" />
                <div className="text-[10px] pl-2 hidden md:block">Search</div>
              </button>
            </div>
          </div>
          {/* <div className="relative">
            <MdOutlineSearch className="absolute md:left-4 left-1 lg:top-2 lg:text-lg md:text-4xl text-2xl top-[2px] md:top-0" />

            <input
              type="text"
              name="search"
              placeholder="Search"
              className={`bg-blue-100 p-[5px] ml-1 w-72 rounded placeholder:text-right lg:block text-right lg:placeholder:mr-10 placeholder:text-sm`}
            />
          </div> */}
          <nav>
            <ul className="items-center flex md:space-x-6 space-x-[18px] text-[10px] font-semibold">
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
                  <div className="flex items-center">
                    <span>For Business</span>
                    <MdOutlineArrowDropDown className="text-xl" />
                  </div>
                </a>
              </li>
              <li className="hidden md:block">
                <a className={className} href="">
                  <img src="public/premium.svg" alt="" className="w-20 h-6" />
                  <span>Upgrade to Premium</span>
                </a>
              </li>
              <li className="md:hidden">
                <button
                  className={`text-2xl ${className}`}
                  onClick={() => setOpenDropDownNav(!openDropDownNav)}
                >
                  <BsThreeDots />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <DotsNav openDropDownNav={openDropDownNav} />
    </>
  );
}

export default Header;
