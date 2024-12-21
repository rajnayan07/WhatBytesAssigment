import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-full pr-2 pt-12 border-r-2 border-gray-200 hidden lg:block">
      <nav className="space-y-4">
        <a
          href="#"
          className="flex items-center gap-4  py-4 px-4 rounded-r-full text-gray-500 font-bold hover:bg-gray-200"
        >
          <FiBarChart2 />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-blue-600  py-4 px-4 rounded-r-full bg-gray-100 font-bold hover:bg-gray-200"
        >
          <TfiMedallAlt />
          Skill Test
        </a>
        <a
          href="#"
          className="flex items-center gap-4  py-4 px-4 rounded-r-full text-gray-500 font-bold hover:bg-gray-200"
        >
          <FaRegFile />
          Internship
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
