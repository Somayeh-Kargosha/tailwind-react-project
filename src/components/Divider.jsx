import { MdOutlineArrowDropDown } from "react-icons/md";

function Divider() {
  return (
    <button className="container mx-auto flex px-1 space-x-4">
      <hr className="bg-gray-400 grow h-[1.5px] my-2" />
      <div className="flex text-sm space-x-1">
        <span className="opacity-60">Select feed view:</span>
        <span>Most relevent first</span>
        <MdOutlineArrowDropDown className="text-xl" />
      </div>
    </button>
  );
}

export default Divider;
