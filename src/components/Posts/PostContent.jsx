/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Comment from "../Comments/Comment";
import CreateComment from "../Comments/CreateComment";

export default function PostContent({ post }) {
  const comment = "you suck";
  const date = "today";
  return (
    <div className="flex items-center flex-col">
      <div className="bg-white border border-black rounded-lg shadow-lg text-black mt-20 mb-5 w-2/3">
        <h1 className="text-3xl font-bold p-2">{post.title}</h1>
        <span className="text-yellow-500">
          Written by{""}
          <Link to={`/${post.user}`}>@{post.user}</Link>
        </span>
        <div className="mt-10 pl-2 pr-2">

        <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
      <CreateComment />
      <Comment author={post.user} content={comment} date={date} />
    </div>
  );
}
