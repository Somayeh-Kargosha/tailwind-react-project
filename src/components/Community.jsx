import { FaHashtag, FaPeopleGroup, FaPlus } from "react-icons/fa6";

function Community({ isOpen }) {
  return (
    <div
      className={`rounded-xl bg-white border border-gray-200 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="text-sm py-4 px-5 border-b space-y-5">
        <p className="opacity-70">Recent</p>
        <div className="space-y-3">
          <p className="space-x-4 flex">
            <span>
              <FaPeopleGroup className="text-[17px]" />
            </span>
            <span className="opacity-70">Junior2Senior</span>
          </p>
          <p className="space-x-4 flex">
            <span>
              <FaHashtag />
            </span>
            <span className="opacity-70">لندو</span>
          </p>
          <p className="space-x-4 flex">
            <span>
              <FaHashtag />
            </span>
            <span className="opacity-70">تیمچه</span>
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-blue-500 hover:underline underline-offset-2">
            <a href="">Groups</a>
          </p>

          <p className="space-x-4 flex">
            <span>
              <FaPeopleGroup className="text-[17px]" />
            </span>
            <span className="opacity-70">Junior2Senior</span>
          </p>
          <p className="opacity-70 pl-7">See all</p>
        </div>
        <div className="space-y-3">
          <p className="space-x-6 md:flex md:justify-between">
            <a
              className="text-blue-500 hover:underline underline-offset-2"
              href=""
            >
              Events
            </a>
            <span>
              <FaPlus className="inline" />
            </span>
          </p>

          <p className="text-blue-500 hover:underline underline-offset-2">
            <a href="">Followed Hashtags</a>
          </p>
          <p className="space-x-4 flex">
            <span>
              <FaHashtag />
            </span>
            <span className="opacity-70">لندو</span>
          </p>
          <p className="space-x-4 flex">
            <span>
              <FaHashtag />
            </span>
            <span className="opacity-70">تیمچه</span>
          </p>
          <p className="opacity-70 pl-7">See all</p>
        </div>
      </div>
      <div className="py-2 text-center">Discover more</div>
    </div>
  );
}

export default Community;
