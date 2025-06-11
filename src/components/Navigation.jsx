import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  const scrollingText = "Cellular IoT: Latest GSMA eSIM Standard Critical to 6.5 Billion Connections Globally by 2030";

  const tabs = ["Home", "Latest News", "Trending"];

  const handleTabClick = (item) => {
    setActiveTab(item);
    // Navigasi ke halaman sesuai tab
    if (item === "Home") navigate("/News-W/");
    else if (item === "Latest News") navigate("/News-W/Latest-News");
    else if (item === "Trending") navigate("/News-W/Trending");
  };

  return (
 <nav className="flex flex-col md:flex-row items-center gap-8 bg-[#999ca3] dark:bg-gray-700 px-6 py-4 text-xs font-bold justify-between">
      {/* Tabs - Tampil di desktop, sembunyi di mobile */}
      <div className="hidden md:flex gap-8 mb-4 md:mb-0 flex-col md:flex-row">
        {tabs.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`cursor-pointer transition ${
                activeTab === item ? "text-white" : "text-gray-700 dark:text-gray-300"
              } text-lg`}
              onClick={() => handleTabClick(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Headlines - Tetap tampil di kanan */}
      <div className="flex items-center w-full md:w-[400px] h-10 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden px-4 justify-end">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">Headlines</span>
        </div>

        {/* Garis pemisah (line) */}
        <div className="h-6 w-px bg-gray-500 mx-2 shrink-0"></div>

        {/* Teks berjalan */}
        <div className="flex-1 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {scrollingText}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
