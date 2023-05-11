import { useState, useEffect } from "react";
import PostFeed from "../components/Posts/PostFeed";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("src/assets/data.json");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-4">
      {loading ? <p>Loading...</p> : <PostFeed posts={posts} />}
    </div>
  );
}
