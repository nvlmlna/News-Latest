import { posts as aiposts } from "../data/posts-AI.jsx";
import { posts as cybersecurityposts } from "../data/posts-Cybersecurity.jsx";
import { posts as edtechposts } from "../data/posts-EdTech.jsx";
import { posts as iotposts } from "../data/posts-IOT.jsx";
import { posts as roboticposts} from "../data/posts-Robotic.jsx";


const allposts = [...cybersecurityposts, ...aiposts, ...edtechposts, ...iotposts, ...roboticposts];

// Fungsi pencarian: Cocokkan query dengan title, excerpt, dan content
export const searchPosts = (query, selectedCategory) => {
  if (!query.trim() && !selectedCategory) return [];
  return allposts.filter((post) => {
    const matchesQuery =
      !query.trim() ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesQuery && matchesCategory;
  });
};

export {allposts }