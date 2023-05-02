/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className=" border border-black mb-4 rounded-lg shadow-2xl p-2  w-full md:w-2/3 bg-white">
      <div className="p-2" key={post.id}>
        <h3 className="text-yellow-400">
          by <Link to={`/${post.user}`}>@{post.user}</Link>
        </h3>
        <Link to={`/${post.user}/${post.title.replace(/\s+/g, "-")}`}>
          <h1 className="mt-2 text-2xl font-bold">{post.title}</h1>
        </Link>
      </div>

      <footer>
        <span className="p-2">
          {wordCount} words. {minutesToRead} min read
        </span>
        <span className="ml-[15rem] md:ml-[40rem]">
          🥡 {post.spicyRamenCount} Spicy Ramen
        </span>
      </footer>
      {post.tags.map((tag) => (
        <span className="p-2" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
