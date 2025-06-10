import { useParams } from 'react-router-dom';
import { allposts } from '../data/index';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function NewsDetails() {
  const { id } = useParams();
  const news = allposts.find(item => item.id === id);
  if (!news) return <div>Loading...</div>;

   // Cari berita lain dengan kategori yang sama, tapi ID berbeda
  const relatedNews = allposts.filter(item => item.category === news.category && item.id !== id).slice(0, 10);

  return (
    <div className="pr-5 md:pr-36 pl-5 md:pl-36 pt-10 dark:text-white text-opacity-30 bg-gray-300 dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">{news.title}</h1>
      <p className="text-base text-center md:text-justify text-gray-500 dark:text-gray-300 mt-3 mb-6">{news.date}</p>
        <img 
            src={news.imageUrl}
            alt={news.title} 
            className="w-full md:max-w-screen-md h-full md:max-h-96 object-cover block mx-auto md:mx-0 rounded-xl mb-7 :" 
        />
      <div className="text-lg">{news.description}</div>

      {/* Tautan Sumber Asli */}
      {news.url && (
        <div className="mt-4">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-600 dark:text-blue-400 hover:underline"
          >
            Baca Sumber Asli
          </a>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 mt-6">Related Articles :</h2>
      {relatedNews.length === 0 ? (
        <p>Tidak ada berita lainnya dalam kategori yang sama.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {relatedNews.map(post => (
          <article 
            key={post.id} 
            className="news-item bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition"
            onClick={() => (window.location.href = `/News-W/${post.id}`)}>
          <img 
            src={post.imageUrl}
            alt={post.title} 
            className="w-full h-48 object-cover object-center rounded-xl mb-4" 
            />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
          </article>
          ))} 
        </div>
      )}
    </div>
  );
}

export default NewsDetails;
