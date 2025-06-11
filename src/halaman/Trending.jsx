import React from 'react';
import { allposts } from '../data';
import Card from "../components/Card";
import { Link } from 'react-router-dom';

const Trending = () => {
  const categoryMap = new Map();

  allposts.forEach((post) => {
    const existing = categoryMap.get(post.category) || [];
    existing.push(post);
    categoryMap.set(post.category, existing);
  });
  
  const trendingPosts = Array.from(categoryMap.values()).map(postsInCategory => {
    const randomIndex = Math.floor(Math.random() * postsInCategory.length );
    return postsInCategory[randomIndex];
  });


  return (
    <div className="text-3xl font-bold dark:text-white text-opacity-30 bg-gray-300 dark:bg-gray-800 min-h-screen">
        {allposts && allposts.length > 0 && (
      <h1 className="text-2xl font-bold text-center mt-12 mb-6 ">Trending News</h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full text-lg ">
         {trendingPosts.map((post) => (
          <article key={post.id} className="news-item bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition">
            <img 
            src={post.imageUrl}
            alt={post.title} 
            className="w-full h-48 object-cover object-center rounded-xl mb-4" 
            />
            <span className="text-base md:text-sm font-bold text-blue-500">{post.category}</span>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
          <p className="text-base text-gray-500 dark:text-gray-300 mb-1 mt-1">{post.date}</p>
          <p className="text-sm text-gray-600 dark:text-gray-200">{post.excerpt.slice(0, 130)}...</p>
          <Link to={`/News-W/${post.id}`}>
          <p className="text-base hover:underline mt-2 ">Read More</p>
          </Link>
          </article>
        ))}
    </div>
    </div>
  )
}

export default Trending