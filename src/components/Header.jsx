import { useState, useEffect } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "./ProfileDropdown";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const switchTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const formatted = query.trim().toLowerCase();
      if (formatted === "ai") navigate("/News-W/AI");
      else if (formatted === "robotic") navigate("/News-W/Robotic");
      else if (formatted === "cybersecurity") navigate("/News-W/Cybersecurity");
      else if (formatted === "iot") navigate("/News-W/IOT");
      else if (formatted === "edtech") navigate("/News-W/EdTech");
      else if (formatted === "home") navigate("/");
      else navigate("/News-W/Error");
    }
  };

  return (
    <header className="relative z-50 w-full bg-[#bdbdbd] dark:bg-[#1a1a1a] shadow-md px-3 sm:px-6 py-3 sm:py-4 transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full bg-white dark:bg-gray-800 rounded-xl md:rounded-full px-4 md:px-9 py-4 transition-colors duration-300">
        
        {/* Logo + Toggle + Mobile Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2x1 sm:text-3xl font-bold tracking-widest text-gray-400 dark:text-white whitespace-nowrap">NEWS</h1>
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle (Mobile) */}
            <label className="relative inline-block w-12 h-7">
              <input
                type="checkbox"
                className="opacity-0 w-0 h-0 peer"
                onChange={switchTheme}
                checked={theme === "dark"}
              />
              <span className="absolute inset-0 bg-gray-300 peer-checked:bg-blue-800 rounded-full transition-all duration-300"></span>
              <span className="absolute h-5 w-5 bg-white rounded-full bottom-1 left-1 flex items-center justify-center transition-all duration-300 peer-checked:translate-x-5">
                {theme === "dark" ? <FaMoon className="text-gray-700 text-xs" /> : <FaSun className="text-yellow-500 text-xs" />}
              </span>
            </label>
            <Profile />
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-2xl text-gray-800 dark:text-white"
            >
              <Menu />
            </button>
          </div>
        </div>

          {/* Search Bar */}
        <div className="flex-grow md:flex md:justify-center w-full md:w-auto">
           <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-2 w-full md:w-96 max-w-xs mx-auto">
              <FaSearch className="text-gray-500 dark:text-gray-300" />
                <input
                type="text"
                placeholder="Search"
                className="bg-transparent ml-2 w-full outline-none text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
                  />
            </div>
          </div>


        {/* Right Side (Desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle (Desktop) */}
          <label className="relative inline-block w-12 h-7">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
              onChange={switchTheme}
              checked={theme === "dark"}
            />
            <span className="absolute inset-0 bg-gray-300 peer-checked:bg-blue-800 rounded-full transition-all duration-300"></span>
            <span className="absolute h-5 w-5 bg-white rounded-full bottom-1 left-1 flex items-center justify-center transition-all duration-300 peer-checked:translate-x-5">
              {theme === "dark" ? <FaMoon className="text-gray-700 text-xs" /> : <FaSun className="text-yellow-500 text-xs" />}
            </span>
          </label>
          <Profile />
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-2xl text-gray-700 dark:text-white"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile/Desktop) */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-full ${isMobile ? "right-4" : "right-6"} mt-2 w-48 md:w-56 bg-white/60 dark:bg-gray-900/80 backdrop-blur-md rounded-lg shadow-xl z-50 font-bold`}
          >
            <ul className="flex flex-col gap-3 p-4 md:p-6 text-black dark:text-white text-base md:text-lg">
              {["Home", "AI", "Robotic", "Cybersecurity", "IOT", "EdTech"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer py-1"
                  onClick={() => {
                    navigate(`/News-W/${item === "Home" ? "" : item}`);
                    setIsNavOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
