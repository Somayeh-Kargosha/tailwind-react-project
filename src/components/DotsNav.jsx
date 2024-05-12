import { FaTh } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";

function DotsNav({ openDropDownNav }) {
  return (
    <div
      className={`absolute flex space-x-7 text-[22px] bg-white p-[18px] rounded-lg w-[125px] pl-7 shadow-xl right-0 top-14 border md:hidden ${
        openDropDownNav ? "block" : "hidden"
      }`}
    >
      <a href="">
        <FaTh className="opacity-60" />
      </a>
      <a href="">
        <ImBriefcase className="opacity-60" />
      </a>
    </div>
  );
}

export default DotsNav;
