import { allposts } from '../data/index';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function MainContent() {
  const sortedPosts = allposts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const categoryMap = new Map();
  sortedPosts.forEach(post => {
    if (!categoryMap.has(post.category)) {
      categoryMap.set(post.category, []);
    }
    const postsInCategory = categoryMap.get(post.category);
    if (postsInCategory.length < 1) {
      postsInCategory.push(post);
    }
  });

  const firstPosts = Array.from(categoryMap.values()).flat();
  const firstPostIds = new Set(firstPosts.map(post => post.id));
  const otherPosts = sortedPosts.filter(post => !firstPostIds.has(post.id));

  return (
    <div className="text-3xl dark:text-white text-opacity-30 bg-gray-300 dark:bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold text-center mt-12 mb-6 text-gray-500 dark:text-white">LIVE NEWS</h1>

      <div className="px-6 mb-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={30}
          className="rounded-2xl"
        >
          {firstPosts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <Link to={`/News-W/${post.id}`}>
                <article
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:scale-[1.01] hover:shadow-lg transition md:gap-6`}
                >
                  <div className="flex-1 lg:pr-6">
                    <span className="text-base md:text-sm font-bold text-red-600">LIVE • {post.category}</span>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white lg:hidden">{post.title.slice(0, 30)}...</h2>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white hidden lg:block">{post.title}</h2>
                    <p className="text-base text-gray-500 dark:text-gray-300 mb-1 mt-1">{post.date}</p>
                    <p className="hidden lg:block text-base text-gray-600 dark:text-gray-200">{post.excerpt.slice(0, 250)}...</p>
                  </div>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 lg:w-[500px] lg:h-[300px] object-cover object-center rounded-xl mt-4 lg:mt-0"
                  />
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h1 className="text-2xl font-bold text-center mt-6 mb-8 text-gray-500 dark:text-white">NEWS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10 items-stretch">
        {otherPosts.map((post) => (
          <Link key={post.id} to={`/News-W/${post.id}`} className="h-full">
            <article className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:scale-[1.01] hover:shadow-lg transition flex flex-col  h-full">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover object-center rounded-xl mb-4"
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-blue-500">{post.category}</span>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">{post.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-200 overflow-hidden max-h-16">
                  {post.excerpt.slice(0, 100)}...
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
