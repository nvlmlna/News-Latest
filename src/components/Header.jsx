import { useState, useEffect, useRef } from "react";
import { FaSearch, FaSun, FaMoon, FaFilter, FaTimes } from "react-icons/fa";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "./ProfileDropdown";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { searchPosts, allposts } from "../data/index";
import { input, span } from "framer-motion/client";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const inputRef = useRef(null);

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

  useEffect(() => {
    const results = searchPosts(query, ""); // Cari tanpa filter kategori di header
    setSearchResults(results);
  }, [query]);

  useEffect(() => {
    // Update URL dengan selectedCategory
    if (location.pathname === "/News-W/SearchResults") {
      const params = new URLSearchParams(searchParams);
      if (selectedCategory) {
        params.set("category", selectedCategory);
      } else {
        params.delete("category");
      }
      setSearchParams(params, { replace: true });
    }
  }, [selectedCategory, location.pathname, searchParams, setSearchParams]);

  const switchTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/News-W/Search?q=${encodeURIComponent(query)}`);
      setSearchResults([]);
      setQuery("");
    }
  };

  // Fungsi untuk navigasi saat teks "NEWS" diklik
  const handleLogoClick = () => {
    navigate("/News-W/"); // Arahkan ke halaman utama
  };

  const isSearchPage = location.pathname === "/News-W/Search";

  return (
    <header className="relative z-50 w-full bg-[#bdbdbd] dark:bg-[#1a1a1a] shadow-md px-3 sm:px-6 py-3 sm:py-4 transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full bg-white dark:bg-gray-800 rounded-xl md:rounded-full px-4 md:px-9 py-4 transition-colors duration-300 ">
        
        {/* Logo + Toggle + Mobile Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={handleLogoClick}
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-gray-400 dark:text-white whitespace-nowrap focus:outline-none hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 max-w-[120px] px-2 py-1"
          >
            NEWS
          </button>
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

          
        <div className="relative flex justify-center w-full md:w-auto z-50">
          <AnimatePresence>
            {query.trim() && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm z-40"
                onClick={() => {
                  setQuery("");
                  setSearchResults([]);
                }}
              />
            )}
          </AnimatePresence>

          {/* Search Bar */}
           <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-2 w-full md:w-96 max-w-xs mx-auto z-50 relative">
                <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="bg-transparent ml-2 w-full outline-none text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
                  />
                  {isMobile && query ? (
                    <FaTimes
                    className="text-gray-500 dark:text-gray-300 ml-2 cursor-pointer"
                    onClick={() => {
                      setQuery("");
                      setSearchResults([]);
                    }}
                    />
                  ) : (
                    <div className=" w-10 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                    <FaSearch 
                    className="text-gray-200 dark:text-gray-700 cursor-pointer "
                    onClick={()=> {
                      if (!isMobile) {
                        if (query.trim()) {
                          navigate(`/News-W/Search?q=${encodeURIComponent(query)}`);
                        } else {
                        inputRef.current?.focus();
                        }
                      }
                    }} /> 
                    </div>
                  )}
                  
            </div>

            {isSearchPage && isMobile && (
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <FaFilter className="text-lg" />
                
              </button>
            )}
          

          {/* Dropdown Hasil Pencarian */}
          <AnimatePresence>
            {query.trim() && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className=" absolute top-full mt-2 w-full max-w-xs -translate-x-1/2 md:w-96 md:left-0 md:translate-x-0 bg-white dark:bg-gray-700 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
              >
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 5).map((post) => (
                    <div
                      key={post.id}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        window.open(post.url, "_blank");
                        setQuery("");
                        setSearchResults([]);
                      }}
                    >
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{post.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-300">{post.excerpt.slice(0, 50)}...</p>
                      <span className="text-xs text-blue-500">{post.category}</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                    Tidak ada hasil untuk "{query}"
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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
