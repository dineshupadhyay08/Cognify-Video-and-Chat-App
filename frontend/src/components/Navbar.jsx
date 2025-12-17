import { MenuIcon, BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
import useAuthUser from "../hook/useAuthUser";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hook/useLogout";

const Navbar = ({ showMenuIcon, onMenuClick }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 flex items-center gap-3">
        {/* ☰ MENU ICON (ONLY MOBILE) */}
        {showMenuIcon && (
          <button
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={onMenuClick}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        )}

        {/* COGNIFY LOGO (MOBILE ALWAYS) */}
        <Link to="/" className="flex items-center gap-2.5 lg:hidden">
          <ShipWheelIcon className="size-7 text-primary" />
          <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Cognify
          </span>
        </Link>

        <div className="flex items-center gap-3 ml-auto">
          <Link to="/notifications">
            <button className="btn btn-ghost btn-circle">
              <BellIcon className="h-6 w-6 opacity-70" />
            </button>
          </Link>

          <ThemeSelector />

          <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>

          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
