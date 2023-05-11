import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import PostFeed from "../components/Posts/PostFeed";
import User from "../components/Users/User";

export default function UserProfile() {
  const [userPosts, setUserPosts] = useState([]);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    async function fetchPostsByUser() {
      try {
        const response = await axios.get(
          `http://localhost:3000/guardian-dispatch/posts/user/${user}`
        );
        setUserPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPostsByUser();
  }, [user]);

  return (
    <div>
      <User user={user} />
      <PostFeed posts={userPosts} />
    </div>
  );
}
