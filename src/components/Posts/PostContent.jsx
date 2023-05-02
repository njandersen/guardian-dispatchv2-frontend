/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function PostContent({ post }) {
  return (
    <div className="bg-white border border-gray-400 rounded-lg shadow-lg text-black mt-20 justify-start">
      <h1>{post.title}</h1>
      <span>
        Written by{""}
        <Link to={`/${post.user}`}>@{post.user}</Link>
      </span>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
