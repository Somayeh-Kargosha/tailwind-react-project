import { FaTh } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";

function DotsMenu() {
  return (
    <div id="menu">
      <a href="">
        <ImBriefcase className="text-2xl" />
      </a>
      <a href="">
        <FaTh className="text-2xl" />
      </a>
    </div>
  );
}

export default DotsMenu;
