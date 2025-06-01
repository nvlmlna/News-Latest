import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchPosts, allposts } from "../data/index";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setQuery(q);
    setResults(searchPosts(q, selectedCategory));
  }, [location.search, selectedCategory]);

  const categories = ["All", "AI", "Robotic", "Cybersecurity", "IOT", "EdTech"];

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Hasil Pencarian untuk "{query}"
          </h1>
         <div className="w-full md:w-auto mb-4 md:mb-0">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
            className="w-full hidden md:block md:w-auto bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-700 dark:text-white focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat === "All" ? "" : cat}>
                {cat}
              </option>
            ))}
          </select>
         </div>

        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md"
                onClick={() => window.open(post.url, "_blank")} // Buka URL eksternal
              >
               <img 
                src={post.imageUrl}
                alt={post.title} 
                className="w-full h-48 object-cover object-center rounded-xl mb-4" 
                />
                <span className="text-xs text-blue-500">{post.category}</span>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{post.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{post.excerpt.slice(0, 100)}...</p>
                
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-800 dark:text-gray-400 mb-4">Tidak ada hasil ditemukan untuk "{query}".</p>
            <p className="text-gray-800 dark:text-gray-400 mb-4">Coba kata kunci lain atau jelajahi kategori berikut:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full hover:bg-blue-600"
                  onClick={() => window.location.href = `/News-W/${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;