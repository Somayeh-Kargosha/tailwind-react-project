import { MdOutlineArrowDropDown } from "react-icons/md";

function Footer() {
  return (
    <footer className="px-4 py-3 text-sm">
      <ul className="opacity-50 flex justify-center flex-wrap space-x-4 leading-7">
        <li>
          <a href="#">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Accessibility</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Help Center</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <span>Privacy & Terms</span>
            <MdOutlineArrowDropDown className="text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Ad Choices</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Advertising</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            <span>Business Services</span>

            <MdOutlineArrowDropDown className="text-xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Get the LinkedIn app</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>More</span>
          </a>
        </li>
      </ul>
      <div
        className="flex justify-center my-2
           space-x-1"
      >
        <img src="public/linkedin.svg" alt="" />
        <span className="mt-1 opacity-50">
          LinkedIn Corporation &copy; 2024
        </span>
      </div>
    </footer>
  );
}

export default Footer;
