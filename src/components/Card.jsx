import React from 'react';
import { Link } from "react-router-dom";

const Card = ({post}) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition">
        <img 
        src={post.imageUrl}
        alt={post.title} 
        className="w-full h-48 object-cover object-center rounded-xl mb-4" 
        />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
        <p className="text-base text-gray-500 dark:text-gray-300 mb-1 mt-1">{post.date}</p>
        <p className="text-sm text-gray-600 dark:text-gray-200">{post.excerpt.slice(0, 130)}...</p>

        <Link to={`/News-W/${post.id}`}>
        <p className="text-base hover:underline mt-2 ">Read More</p>
        </Link>
    </div>
  )
}

export default Card