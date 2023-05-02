import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PostFeed from "../components/Posts/PostFeed";
import User from "../components/Users/User";
import data from "../assets/data.json";

export default function UserProfile() {
  const [userPosts, setUserPosts] = useState([]);
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const filteredPosts = data.filter((post) => post.user === username);
    setUserPosts(filteredPosts);
    const filteredUser = data.find((user) => user.user === username);
    setUser(filteredUser);
  }, [username]);

  return (
    <div>
      <User user={user} />
      <PostFeed posts={userPosts} />
    </div>
  );
}
