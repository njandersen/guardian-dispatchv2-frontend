import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useContext } from "react";

import Feed from "./pages/Feed";
import NavBar from "./components/UI/NavBar";
import UserProfile from "./pages/UserProfile";
import UserPost from "./components/Users/UserPost";
import PostForm from "./pages/PostForm";
import Enter from "./pages/Enter";

import UserContext from "./store/authContext";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const isLoggedInFromLocalStorage = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedInFromLocalStorage === "true");
  }, [setIsLoggedIn]);

  console.log(isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/:username/:postTitle" element={<UserPost />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/enter" element={<Enter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
