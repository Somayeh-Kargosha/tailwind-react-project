import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function ToggleButton({ isOpen, setIsOpen }) {
  return (
    <div className="md:hidden flex rounded-md justify-center hover:bg-gray-300 hover:cursor-pointer">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <>
            <span>Show less </span>

            <FaChevronUp className="inline" />
          </>
        ) : (
          <>
            <span>Show more </span>

            <FaChevronDown className="inline" />
          </>
        )}
      </button>
    </div>
  );
}

export default ToggleButton;
