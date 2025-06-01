import React from 'react';
import { Link } from "react-router-dom";

const Card = ({post}) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md">
        <img 
        src={post.imageUrl}
        alt={post.title} 
        className="w-full object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{post.date}</p>
        <p className="text- text-gray-600 dark:text-gray-200">{post.excerpt}</p>

        <Link to={`/beritarincian/${post.id}`}>
        <p className="text-sm hover:underline mt-2 ">Read More</p>
        </Link>
    </div>
  )
}

export default Card