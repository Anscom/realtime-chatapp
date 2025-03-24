import { Link } from "react-router-dom";
import { useAuthStore } from "../api/useAuthStore";
import { LogOut, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700 text-white 
      shadow-lg fixed w-full top-0 z-40 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <h1 className="text-lg font-bold">🚀 YourChat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md 
        rounded-lg shadow-md text-white font-medium hover:bg-white/30 transition-all"
                >
                  <User className="size-5 text-white" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/80 backdrop-blur-md 
        rounded-lg shadow-md text-white font-medium hover:bg-red-600 transition-all"
                  onClick={logout}
                >
                  <LogOut className="size-5 text-white" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
