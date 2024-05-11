import { GoBookmarkFill } from "react-icons/go";

function Identity() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 my-2">
      <div
        style={{ backgroundImage: "url(/public/varying-stripes.png)" }}
        className="h-14 rounded-t-xl"
      ></div>
      <div className="flex flex-col items-center border-b">
        <img
          src="public/1712557029181.jpeg"
          alt=""
          className="w-20 h-20 -mt-10 rounded-full ring-2 ring-white ring-offset-0.5"
        />
        <div className="my-4">
          <h4 className="text-center opacity-80 hover:underline underline-offset-2">
            <a href="">Somayeh Kargosha</a>
          </h4>
          <p className="opacity-50 text-[13px]">Junior Frontend Developer</p>
        </div>
      </div>
      <div className="text-sm border-b">
        <p className="md:flex md:justify-between px-5 py-3 space-x-4">
          <span className="opacity-60">Profile viewers</span>
          <span className="text-blue-500">113</span>
        </p>
        <p className="md:flex md:justify-between px-5 pb-4 space-x-4">
          <span className="opacity-60">Post impressions</span>
          <span className="text-blue-500">75</span>
        </p>
      </div>
      <div className="text-sm opacity-70 py-2 px-4 flex items-center">
        <span className="px-1">
          <GoBookmarkFill />
        </span>
        <span className="mt-1">Saved items</span>
      </div>
    </div>
  );
}

export default Identity;
