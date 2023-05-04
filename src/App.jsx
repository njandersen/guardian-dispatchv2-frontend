import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./pages/Feed";
import NavBar from "./components/UI/NavBar";
import UserProfile from "./pages/UserProfile";
import UserPost from "./components/Users/UserPost";
import PostForm from "./pages/PostForm";
import Enter from "./pages/Enter";

function App() {
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
