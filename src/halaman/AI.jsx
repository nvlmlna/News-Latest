import React from "react";
import { posts } from "../data/posts-AI";
import Card from "../components/Card";

const AI = () => {
  return (
    <div className="text-3xl font-bold tracking-[.3em] text-black-800 text-opacity-30 bg-gray-300 min-h-screen">
      <h1>
        
        {/* Post Cards */}
      <div className="grid gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Card key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}
      </div>

      </h1>
    </div>
  )
}

export default AI
