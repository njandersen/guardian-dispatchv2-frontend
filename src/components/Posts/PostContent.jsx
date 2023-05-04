/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Comment from "../Comments/Comment";
import CreateComment from "../Comments/CreateComment";

export default function PostContent({ post }) {
  const comment = "you suck";
  const date = "today";
  return (
    <>
      <div className="bg-white border border-gray-400 rounded-lg shadow-lg text-black mt-20 justify-start">
        <h1>{post.title}</h1>
        <span>
          Written by{""}
          <Link to={`/${post.user}`}>@{post.user}</Link>
        </span>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <CreateComment />
      <Comment author={post.user} content={comment} date={date} />
    </>
  );
}
