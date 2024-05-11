import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { PiExclamationMarkFill } from "react-icons/pi";

function Follows() {
  const className =
    "flex justify-around opacity-70 items-center ml-16 outline space-x-1 rounded-full px-3 m-1 py-1";
  return (
    <div className="rounded-xl text-sm my-2 bg-white border border-gray-200 p-3 space-y-3">
      <div
        className="flex
           justify-between items-center font-bold opacity-80"
      >
        <h2>Add to your feed</h2>
        <button>
          <PiExclamationMarkFill />
        </button>
      </div>
      <ul>
        <li className="mb-4">
          <div className="flex justify-start items-center space-x-4">
            <a href="#">
              <img
                src="public/1.jpeg"
                alt=""
                className="rounded-full w-12 h-11"
              />
            </a>
            <div>
              <a href="" className="font-semibold">
                WebDito
              </a>
              <p
                className="opacity-50 text-[12px]
                "
              >
                Company. Software Development
              </p>
            </div>
          </div>
          <div>
            <button className={className}>
              <FaPlus />
              <span>Follow</span>
            </button>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex justify-start items-center space-x-4">
            <a href="#">
              <img
                src="public/1.jpeg"
                alt=""
                className="rounded-full w-12 h-11"
              />
            </a>
            <div>
              <a href="" className="font-semibold">
                WebDito
              </a>
              <p className="opacity-50 text-[12px]">
                Company. Software Development
              </p>
            </div>
          </div>
          <div>
            <button className={className}>
              <FaPlus />
              <span>Follow</span>
            </button>
          </div>
        </li>
        <li className="mb-4">
          <div className="flex justify-start items-center space-x-4">
            <a href="#">
              <img
                src="public/1.jpeg"
                alt=""
                className="rounded-full w-12 h-11"
              />
            </a>
            <div>
              <a href="" className="font-semibold">
                WebDito
              </a>
              <p className="opacity-50 text-[12px]">
                Company. Software Development
              </p>
            </div>
          </div>
          <div>
            <button className={className}>
              <FaPlus />
              <span>Follow</span>
            </button>
          </div>
        </li>
      </ul>
      <div className="flex items-center space-x-2 font-bold opacity-70 p-1">
        <a href="">View all recommendations</a>
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default Follows;
