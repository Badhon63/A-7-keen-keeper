import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";

const Navbar = () => {
  const linkBase =
    "flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200";

  const activeStyle = "bg-[#244D3F] text-white";
  const inactiveStyle =
    "text-[#244D3F] hover:bg-base-300";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-[#244D3F]">
          KeenKeeper
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaClock />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <FaChartPie />
            Stats
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;