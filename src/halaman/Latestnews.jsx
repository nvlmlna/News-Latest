import React from 'react';
import { posts } from "../data/posts-LatestNews";
import Card from "../components/Card";

const Latestnews = () => {
  return (
    <div className="text-3xl font-bold  text-black-800 text-opacity-30 bg-gray-300 min-h-screen">
      <h1 className="text-3x1 font-bold text-center  mt-8 ">Latest News</h1>

      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Tidak ada post tersedia</p>
      )}
    </div>
  )
}

export default Latestnews
