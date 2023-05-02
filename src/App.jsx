import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./pages/Feed";
import NavBar from "./components/UI/NavBar";
import UserProfile from "./pages/UserProfile";
import UserPost from "./components/Users/UserPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/:username/:postTitle" element={<UserPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
