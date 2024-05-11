import { BsNewspaper } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";

function ShareBox() {
  const className =
    "space-x-3 p-2 hover:bg-gray-100 rounded-md flex items-center";
  return (
    <div className="rounded-xl bg-white border mb-2 md:my-2 border-gray-200">
      <div className="flex justify-start px-5 space-x-4 pt-3">
        <img
          src="public/1712557029181.jpeg"
          alt=""
          className="w-12 h-12 rounded-full "
        />
        <button className="outline opacity-60 text-start outline-1 rounded-full w-full outline-gray-400 hover:bg-gray-100">
          <span className="pl-6 text-[12px]">
            Start a post, try writing with AI
          </span>
        </button>
      </div>
      <div className="flex justify-around opacity-70 px-2 py-[2px]">
        <button type="button" className={className}>
          <MdPermMedia className="text-xl text-blue-600" />
          <span
            className="text-sm mt-[2px]
            "
          >
            Media
          </span>
        </button>
        <a href="" className={className}>
          <FaRegCalendarAlt className="text-xl text-amber-700" />
          <span
            className="text-sm mt-[2px]
            "
          >
            Event
          </span>
        </a>
        <a href="" className={className}>
          <BsNewspaper className="text-xl text-orange-600" />

          <span
            className="text-sm mt-[2px]
            "
          >
            Write article
          </span>
        </a>
      </div>
    </div>
  );
}

export default ShareBox;
