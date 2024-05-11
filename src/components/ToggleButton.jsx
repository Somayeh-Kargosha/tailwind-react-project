import { FaChevronUp } from "react-icons/fa6";

function ToggleButton() {
  return (
    <div className="md:hidden flex rounded-md justify-center hover:bg-gray-300 hover:cursor-pointer">
      <button type="button">
        <span>Show less </span>

        <FaChevronUp className="inline" />
      </button>
    </div>
  );
}

export default ToggleButton;
