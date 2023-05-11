/* eslint-disable react/prop-types */
import PostItem from "./PostItem";

export default function PostFeed({ posts }) {
  return posts
    ? posts.map((post) => <PostItem post={post} key={post.id + post.title} />)
    : null;
}
