/* eslint-disable react/prop-types */
import PostItem from "./PostItem";

export default function PostFeed({ post }) {
  return post
    ? post.map((post) => <PostItem post={post} key={post.id} />)
    : null;
}
