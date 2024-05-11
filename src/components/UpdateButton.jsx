function UpdateButton() {
  return (
    <div className="flex justify-center my-2 md:hidden">
      <button
        className="hover:bg-blue-100 hover:cursor-pointer hover:outline-2 hover:outline-sky-800 hover:text-sky-800 text-lg font-bold text-blue-600 outline outline-blue-600 py-1 px-4 rounded-full"
        type="button"
      >
        <span>See new posts</span>
      </button>
    </div>
  );
}

export default UpdateButton;
