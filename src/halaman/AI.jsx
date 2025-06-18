import React from "react";
import { posts } from "../data/posts-AI.jsx";
import Card from "../components/Card";

const AI = () => {
  return (
    <div className="text-3xl font-bold dark:text-white text-opacity-30 bg-gray-300 dark:bg-gray-800 min-h-screen">
      {posts && posts.length > 0 && (
      <h1 className="text-2xl font-bold text-center mt-12 mb-6 ">AI News Latest</h1>
      )}

      <div className="flex items-center justify-center flex-1">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full text-lg ">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
      ) : (
        <p className="text-center text-gray-600 text-xl mt-56 mx-auto w-1/2">Tidak ada post tersedia</p>
      )}
    </div>
    </div>
  )
}

export default AI
