import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";

function NewPostsBox() {
  return (
    <div className="py-2">
      <div className="rounded-t-xl bg-white border-b-0 border border-gray-200 px-3 divide-y divide-gray-200">
        <div className="flex justify-between p-[2px]">
          <div className="flex items-center space-x-2 text-[11px]">
            <a href="">
              <img
                src="public/1712557029181.jpeg"
                alt=""
                className="w-7 h-7 rounded-full"
              />
            </a>
            <a href="" className="font-bold">
              Somayeh Kargosha
            </a>
            <span className="opacity-60">Likes this</span>
          </div>
          <div className="text-xl opacity-70 space-x-4 space-y-2">
            <button>
              <BsThreeDots />
            </button>
            <button>
              <IoClose />
            </button>
          </div>
        </div>

        <div className="flex justify-between px-1 py-2">
          <div className="flex items-center space-x-3">
            <a href="">
              <img
                src="public/1712557029181.jpeg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </a>
            <div>
              <a href="" className="font-semibold">
                Somayeh Kargosha
              </a>
              <p className="opacity-60 text-[12px]">
                Junior Frontend Developer
              </p>
            </div>
          </div>
          <button className="space-x-1 text-blue-600 my-5 flex">
            <TiUserAdd className="text-2xl" />
            <span className="text-[16px] mt-[2px]">Connect</span>
          </button>
        </div>
      </div>
      <div className="rounded-b-xl bg-white border border-gray-200 border-t-0">
        <img src="public/postpic.jpeg" alt="" className="rounded-b-xl w-full" />
      </div>
    </div>
  );
}

export default NewPostsBox;
