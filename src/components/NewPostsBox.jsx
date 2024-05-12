import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { BiRepost } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";

function NewPostsBox() {
  return (
    <div className="py-2">
      <div className="rounded-xl bg-white border border-gray-200">
        <div className="flex justify-between py-[6px] px-3">
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

        <hr className="mx-4 border-gray-200" />

        <div className="flex justify-between px-4 py-3">
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
        <img src="public/postpic.jpeg" alt="" className="w-full" />
        <div className="py-[5px] px-4 flex items-center space-x-1 opacity-70">
          <AiFillLike className="text-blue-500 text-sm" />
          <span className="text-[13px] mt-[2px]">2</span>
        </div>
        <hr className="mx-3 border-gray-200" />
        <div className="flex justify-around text-sm opacity-80 items-center p-4 font-semibold">
          <p className="flex space-x-1">
            <SlLike className="text-[17px]" />
            <span>Like</span>
          </p>
          <p className="flex items-center space-x-1">
            <FaRegCommentAlt />
            <span>Comment</span>
          </p>
          <p className="flex items-center space-x-1">
            <BiRepost className="text-2xl" />
            <span>Repost</span>
          </p>
          <p className="flex items-center space-x-1">
            <BsSendFill />
            <span>Send</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewPostsBox;
