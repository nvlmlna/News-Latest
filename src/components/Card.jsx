import React from 'react';
import { Link } from "react-router-dom";

const Card = ({post}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
        <img 
        src={post.imageUrl}
        alt={post.title} 
        className="w-full object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <p className="text- text-gray-600">{post.excerpt}</p>

        <Link to={`/beritarincian/${post.id}`}>
        <p className="text-sm hover:underline mt-3">Read More</p>
        </Link>
    </div>
  )
}

export default Card