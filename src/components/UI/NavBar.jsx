import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

import UserContext from "../../store/authContext";

export default function NavBar() {
  //TODO
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      const response = await axios.post(
        "http://localhost:3000/guardian-dispatch/logout",
        {
          refreshToken,
        }
      );

      if (response.status === 200) {
        // clear token from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        // clear user from context
        setUser(null);
        // redirect to login page
        window.location.href = "/enter";
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        console.error("Error logging out:", error);
        alert("Error logging out. Please try again.");
      }
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 bg-slate-900">
      <div className="flex justify-start">
        <Link
          to="/"
          className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
        >
          FEED
        </Link>
        {user && (
          <Link
            to="/create"
            className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
          >
            Create Post
          </Link>
        )}
      </div>
      <h1 className="text-2xl font-bold text-white mx-auto">
        Guardian Dispatch
      </h1>
      {user && (
        <Link
          to="/enter"
          className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
          onClick={handleSignOut}
        >
          Sign out
        </Link>
      )}

      {!user && (
        <Link
          to="/enter"
          className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
